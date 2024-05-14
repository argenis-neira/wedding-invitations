const HandleGoogleSheets = async (data) => {
  const accessToken = "ya29.a0AXooCgsb-4QtGFdtgF1gtT1F5isqm2R_Mnz38DKFWYnCp2OSff23UHA1RRxfLD3lCOXCXTFJhxz2q46PQ9aQFQHvgmgnfb-onE-OzDfkj_8vgGiovKGTnQngxBFHSIbZPj1HVQSZRtySAYYR9dlSYGL144O_06el7KqDaCgYKAY4SARMSFQHGX2Mi0oIY7r6Ln3DPFPzRCGxS1g0171";

  const spreadsheetId = '1rG7n7MocRjBYRlyYoM6uTeGdXumjrrAkO5Ugh-JViYY';
  const sheetName = 'Hoja 1';
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}:append?valueInputOption=USER_ENTERED`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    },
    body: JSON.stringify({
      values: [data]
    })
  });

  if (response.ok) {
    console.log('Datos del formulario enviados exitosamente a Google Sheets');
  } else {
    console.error('Error al enviar los datos del formulario a Google Sheets');
  }
}



export default HandleGoogleSheets