// Show modal only if not shown before
  window.addEventListener('load', () => {
    if (!localStorage.getItem('developerModalShown')) {
      document.getElementById('customModal').classList.remove('hidden');
      localStorage.setItem('developerModalShown', 'true');
    }
  });
  function closeModal() {
    document.getElementById('customModal').classList.add('hidden');
  }