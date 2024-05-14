const HandleGoogleSheets = async (data) => {
  const accessToken = ""
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