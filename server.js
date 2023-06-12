const express = requires ('express');

const app = express ();

const PORT = 5050;

app.listen(PORT, () => console.log('server luanched and listening on port' + PORT));