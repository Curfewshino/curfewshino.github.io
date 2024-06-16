<script>
  import "../app.css";
</script>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet">
  <title>Document</title>
</head>
<body class="font-[ubuntu]">
  <div class="z-[999] shadow-md bg-white top-0 fixed flex flex-row flex-nowrap gap-2 p-2 m-2 border-[2px] border-black rounded-[4px] left-0 right-0">
    <div class="flex flex-row gap-2 my-auto">
      <div>
        <img src="src\assets\weblogo.png" alt="logo" width="30" height="30">
      </div>
    </div>
    <div class="border border-black"></div>
    <div class="my-auto text-sm font-bold">Posibility to present</div>
    <div class="flex-row flex gap-2 my-auto ml-auto">
      <div class="shadow-md p-1 border-4 rounded-[4px] border-black/0 hover:border-orange-400 active:border-orange-400 duration-300">
        <a href="/">Home</a>
      </div>
      <div class="shadow-md p-1 border-4 rounded-[4px] border-black/0 hover:border-orange-400 active:border-orange-400 duration-300">
        <a href="/">Blog</a>
      </div>
      <div class="shadow-md p-1 border-4 rounded-[4px] border-black/0 hover:border-orange-400 active:border-orange-400 duration-300">
        <a href="/">Portfolio</a>
      </div>
    </div>
  </div>
  <div class="mb-[100px] bg-white top-0"></div>
  <slot/>
</body>
  </html>
  