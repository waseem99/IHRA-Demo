(() => {
  function generateReport() {
    const title = 'IHRA MSDS Readiness Report';
    const body = [
      'Demo General Hospital',
      '',
      'Readiness Summary',
      'Assessed Indicators: 3/10',
      'Readiness Score: 50%',
      'Critical Gaps: 1',
      '',
      'Indicator Summary',
      'MSDS 278 - Healthcare Waste Segregation - Done - Score 2',
      'MSDS 70 - Patient Information / Follow-up / Medication - Partially Done - Score 1',
      'MSDS 74 - Medication Safety - Undone - Score 0',
      '',
      'Critical Gap',
      'MSDS 74 requires corrective action.',
      '',
      'Recommended Actions',
      '1. Review learning material.',
      '2. Complete corrective actions.',
      '3. Re-run readiness assessment.',
      '',
      'Generated from IHRA MSDS Digital Learning Prototype.'
    ];

    const printWindow = window.open('', '_blank');
    if (!printWindow) return;
    printWindow.document.write(`<!doctype html><title>${title}</title><style>body{font-family:Arial;padding:40px;color:#123}h1{color:#0b5e54}table{border-collapse:collapse;width:100%}td{border:1px solid #ddd;padding:8px}</style><h1>${title}</h1><pre style="font-family:Arial;line-height:1.7">${body.join('\n')}</pre>`);
    printWindow.document.close();
    setTimeout(() => printWindow.print(), 400);
  }

  document.addEventListener('click', e => {
    const btn = e.target.closest('button');
    if (!btn) return;
    if (btn.textContent.includes('Generate Demo PDF')) {
      e.preventDefault();
      generateReport();
    }
  });
})();
