const tabs = document.querySelectorAll('.tabs');

const showElements = (e) => {
  if (e.target.closest('[data-tabs]')) {
    const targetButton = e.target.closest('[data-tabs]');
    const targetButtonType = targetButton.dataset.tabs;
    const contentBox = document.querySelector(`[data-type="${e.currentTarget.dataset.type}-content"]`);

    for (const element of targetButton.parentElement.children) {
      element.classList.remove('tabs__item_active');
    }

    targetButton.classList.add('tabs__item_active');

    for (const element of contentBox.children) {
      if (targetButtonType === 'all') element.removeAttribute('data-hidden');
      else if (element.dataset.element !== targetButtonType) element.setAttribute('data-hidden', '');
      else element.removeAttribute('data-hidden');
    }
  }
};

for (const tab of tabs) {
  tab.addEventListener('click', showElements);
}