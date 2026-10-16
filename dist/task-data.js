(() => {
  'use strict';
  const dateKey = date => `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
  const validDate = value => typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value) && dateKey(new Date(`${value}T12:00:00`)) === value;
  const validTask = t => t && typeof t.id === 'string' && t.id.length > 0 && t.id.length <= 100
    && typeof t.title === 'string' && t.title.trim().length > 0 && t.title.length <= 160
    && typeof t.subject === 'string' && t.subject.trim().length > 0 && t.subject.length <= 50
    && validDate(t.deadline) && ['High','Medium','Low'].includes(t.priority) && typeof t.completed === 'boolean'
    && (t.notes === undefined || (typeof t.notes === 'string' && t.notes.length <= 2000))
    && (t.plannedFor === undefined || validDate(t.plannedFor))
    && (t.completedAt === undefined || (typeof t.completedAt === 'string' && !isNaN(Date.parse(t.completedAt))));
  function cleanTask(t) {
    const result = {id:t.id,title:t.title.trim(),subject:t.subject.trim(),deadline:t.deadline,priority:t.priority,completed:t.completed};
    if (t.notes !== undefined) result.notes = t.notes;
    if (t.plannedFor !== undefined) result.plannedFor = t.plannedFor;
    if (t.completedAt !== undefined) result.completedAt = t.completedAt;
    return result;
  }
  function parseBackup(text) {
    if (typeof text !== 'string' || text.length > 5 * 1024 * 1024) throw new Error('Backup must be smaller than 5 MB.');
    let data;
    try {data = JSON.parse(text);} catch {throw new Error('This file is not valid JSON.');}
    const tasks = Array.isArray(data) ? data : data?.format === 'focusflow' && data.version === 1 ? data.tasks : null;
    if (!Array.isArray(tasks) || tasks.length > 10000) throw new Error('Choose a FocusFlow backup with at most 10,000 assignments.');
    if (!tasks.every(validTask) || new Set(tasks.map(t=>t.id)).size !== tasks.length) throw new Error('Backup contains invalid or duplicate assignments. Nothing was imported.');
    return tasks.map(cleanTask);
  }
  window.FocusFlowModel = {validDate,validTask,cleanTask,parseBackup};
})();
