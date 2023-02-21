const wrapper = (cards) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="./assets/css/style.css">
    <title>Team Profile</title>

</head>

<body>
    <header>Team Profile</header>

    <div class="flex justify-evenly">
        ${cards}
    </div>
</body>
</html>
`;

module.exports = wrapper;