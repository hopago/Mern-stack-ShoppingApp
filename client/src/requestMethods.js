import axios from 'axios';

const BASE_URL = "http://localhost:8000/api";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Zjk4OTMyMzEyZDBkYmQ2YjAzOTgyZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NDE0NDA2NiwiZXhwIjoxNjk0NzQ4ODY2fQ.PjeOQsDrPaYePIeVqVkWW_QYbBFoQWUze7fwxMadMmw";

export const publicRequest = axios.create({

    baseURL: BASE_URL,

});

export const userRequest = axios.create({

    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` }

});