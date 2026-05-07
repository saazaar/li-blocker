const toggleInput = document.getElementById('toggleInput');
const statusChip  = document.getElementById('statusChip');
const statusText  = document.getElementById('statusText');

function applyState(enabled) {
  toggleInput.checked = enabled;
  if (enabled) {
    statusChip.classList.remove('off');
    statusText.textContent = 'Blocker is ON';
  } else {
    statusChip.classList.add('off');
    statusText.textContent = 'Blocker is OFF';
  }
}

// Load saved state
chrome.storage.local.get({ blockerEnabled: true }, ({ blockerEnabled }) => {
  applyState(blockerEnabled);
});

// Toggle handler
toggleInput.addEventListener('change', () => {
  const enabled = toggleInput.checked;

  const update = enabled
    ? { enableRulesetIds: ['ruleset_1'],  disableRulesetIds: [] }
    : { enableRulesetIds: [],             disableRulesetIds: ['ruleset_1'] };

  chrome.declarativeNetRequest.updateEnabledRulesets(update, () => {
    chrome.storage.local.set({ blockerEnabled: enabled });
    applyState(enabled);
  });
});
