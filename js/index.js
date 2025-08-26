// message on index page
  window.addEventListener('load', () => {
    // Show modal only if not shown before
    // if (!localStorage.getItem('developerModalShown')) {
    //   document.getElementById('customModal').classList.remove('hidden');
    //   localStorage.setItem('developerModalShown', 'true');
    // }
    
    // Always show the modal, every page load
    document.getElementById('customModal').classList.remove('hidden');

  });
  function closeModal() {
    document.getElementById('customModal').classList.add('hidden');
  }
