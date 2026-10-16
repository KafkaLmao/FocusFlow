(() => {
  'use strict';
  const input = document.getElementById('backup-file');
  const notice = message => window.FocusFlowData?.notify(message);
  document.getElementById('export-backup').onclick = () => {
    try {
      const data = window.FocusFlowData.snapshot();
      const blob = new Blob([JSON.stringify({format:'focusflow',version:1,exportedAt:new Date().toISOString(),tasks:data},null,2)],{type:'application/json'});
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      const now=new Date();
      const date=`${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
      link.download = `focusflow-backup-${date}.json`;
      document.body.append(link);link.click();link.remove();
      setTimeout(()=>URL.revokeObjectURL(url),1000);
      notice('Backup downloaded. Keep it somewhere safe.');
    } catch {notice('Could not create a backup. Please try again.');}
  };
  document.getElementById('import-backup').onclick = () => {input.value='';input.click();};
  input.onchange = async () => {
    const file = input.files?.[0];
    if (!file) return;
    try {
      if (file.size > 5 * 1024 * 1024) throw new Error('Backup must be smaller than 5 MB.');
      const tasks = window.FocusFlowModel.parseBackup(await file.text());
      const added = window.FocusFlowData.merge(tasks);
      notice(`Imported ${added} assignment${added===1?'':'s'}. Existing assignments were kept.`);
    } catch (error) {notice(error.message || 'Could not import this backup.');}
    finally {input.value='';}
  };
})();
