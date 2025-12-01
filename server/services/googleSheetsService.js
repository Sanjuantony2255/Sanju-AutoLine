const { google } = require('googleapis');
const path = require('path');
require('dotenv').config();

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const CREDENTIALS_PATH = path.join(__dirname, '../config/credentials.json');
const SPREADSHEET_ID = process.env.SPREADSHEET_ID;

async function appendToSheet(data) {
    try {
        const auth = new google.auth.GoogleAuth({
            keyFile: CREDENTIALS_PATH,
            scopes: SCOPES,
        });

        const client = await auth.getClient();
        const sheets = google.sheets({ version: 'v4', auth: client });

        const request = {
            spreadsheetId: SPREADSHEET_ID,
            range: 'Sheet1!A:E', // Adjust range as needed, assumes columns: Name, Email, Phone, Model, Date
            valueInputOption: 'USER_ENTERED',
            resource: {
                values: [
                    [data.name, data.email, data.phone, new Date().toLocaleString()]
                ],
            },
        };

        const response = await sheets.spreadsheets.values.append(request);
        console.log('Data appended to sheet:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error appending to sheet:', error);
        // Don't throw error to avoid breaking the main flow if sheet fails
        // throw error; 
        return null;
    }
}

module.exports = { appendToSheet };
