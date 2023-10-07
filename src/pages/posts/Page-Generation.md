---
layout: '../../layouts/MarkdownPost.astro'
title: '基于GPT3.5的html静态页面生成'
pubDate: 2023-10-07
description: 'html generation'
author: 'Jack Pan'
cover:
    url: 'https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202310071446772.png'
    square: 'https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202310071446772.png'
    alt: 'cover'
tags: ["软件使用"]
theme: 'light'
featured: true
---
##  简单介绍

可以通过GPT简单实现HTML页面生成，以下例子为制作一个简单的邮件信息界面
GPT share link: https://chat.openai.com/share/c3c0ad23-9c41-43e4-94f1-69a1d44b4fda
demo link: http://jianchengpan.com/Info/email.html

##提示GPT生成HTML过程

当创建一个包含邮箱地址的HTML静态页面时，你可以使用以下示例作为起点。你可以将邮箱地址部分替换为你自己的邮箱地址：

```
html<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Address Page</title>
</head>
<body>
    <h1>Contact Information</h1>
    <p>If you have any questions or need assistance, please feel free to contact us via email:</p>
    <p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
</body>
</html>

```

在这个示例中，我们创建了一个基本的HTML页面，其中包括一个标题和邮箱地址。邮箱地址部分使用`<a>`标签和`href`属性来创建一个邮箱链接，当用户单击该链接时，他们的默认邮件客户端将打开并自动填写目标邮箱地址。你可以将`your.email@example.com`替换为你的实际邮箱地址。

这只是一个基本示例，你可以根据需要添加更多的内容和样式。

要将页面的字体设置为Times New Roman，你可以在CSS中指定字体样式。以下是一个更新后的示例，其中包含Times New Roman字体：

```
html<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Address Page</title>
    <style>
        body {
            font-family: "Times New Roman", Times, serif;
        }
    </style>
</head>
<body>
    <h1>Contact Information</h1>
    <p>If you have any questions or need assistance, please feel free to contact us via email:</p>
    <p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
</body>
</html>

```

在上述示例中，我们在`<style>`标签内定义了`body`元素的字体样式，将字体设置为"Times New Roman"。现在，整个页面中的文本将使用Times New Roman字体进行呈现。

请注意，虽然我们指定了"Times New Roman"字体，但页面的最终外观仍取决于用户计算机上是否安装了该字体。如果用户的计算机上没有Times New Roman字体，浏览器将尝试使用类似的替代字体。

要将页面内容居中显示，你可以使用CSS来设置页面的居中样式。下面是一个示例，将页面内容垂直和水平居中显示，并使用Times New Roman字体：

```
html<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Address Page</title>
    <style>
        body {
            font-family: "Times New Roman", Times, serif;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
    </style>
</head>
<body>
    <h1>Contact Information</h1>
    <p>If you have any questions or need assistance, please feel free to contact us via email:</p>
    <p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
</body>
</html>

```

在这个示例中，我们使用CSS的`display: flex`属性将页面内容放在垂直和水平方向上都居中显示。`justify-content: center`用于在垂直方向上居中，`align-items: center`用于在水平方向上居中。`height: 100vh`将页面的高度设置为视口的高度，确保内容在垂直方向上居中显示。

这将使页面内容在中央水平和垂直位置居中显示，并且使用了Times New Roman字体。

要添加一个按钮，让用户能够复制邮箱地址，你可以使用JavaScript来实现这个功能。以下是更新后的示例，包括一个按钮：

```
html<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Address Page</title>
    <style>
        body {
            font-family: "Times New Roman", Times, serif;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
    </style>
    <script>
        function copyEmail() {
            var email = "your.email@example.com"; // 你的邮箱地址
            var textarea = document.createElement("textarea");
            textarea.value = email;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
            alert("邮箱地址已复制到剪贴板: " + email);
        }
    </script>
</head>
<body>
    <h1>Contact Information</h1>
    <p>If you have any questions or need assistance, please feel free to contact us via email:</p>
    <p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
    <button onclick="copyEmail()">复制邮箱地址</button>
</body>
</html>

```

在这个示例中，我们添加了一个按钮，并使用JavaScript来实现复制邮箱地址的功能。当用户点击按钮时，JavaScript将创建一个临时文本区域 (`<textarea>`)，将邮箱地址复制到文本区域中，然后选择文本并执行浏览器的`copy`命令。最后，它将文本区域删除，并显示一个提示框，告诉用户邮箱地址已经被复制到剪贴板中。你可以将`your.email@example.com`替换为你的实际邮箱地址。

如果你希望文本内容在页面上居中并垂直向上对齐，你可以稍微修改CSS样式。以下是一个示例，将文本内容在页面上居中并垂直向上对齐，并添加了复制邮箱的按钮：

```
html<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Address Page</title>
    <style>
        body {
            font-family: "Times New Roman", Times, serif;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .content {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    </style>
    <script>
        function copyEmail() {
            var email = "your.email@example.com"; // 你的邮箱地址
            var textarea = document.createElement("textarea");
            textarea.value = email;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
            alert("邮箱地址已复制到剪贴板: " + email);
        }
    </script>
</head>
<body>
    <div class="content">
        <h1>Contact Information</h1>
        <p>If you have any questions or need assistance, please feel free to contact us via email:</p>
        <p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
        <button onclick="copyEmail()">复制邮箱地址</button>
    </div>
</body>
</html>

```

在这个示例中，我们添加了一个名为`content`的`<div>`，并在其中包裹了文本内容和按钮。然后，我们在CSS中对`content`类应用了一些样式，使文本在页面上居中显示，并垂直向上对齐。

如果你希望文本内容在页面上水平居中并置于顶部，你可以稍微修改CSS样式。以下是一个示例：

```
html<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Address Page</title>
    <style>
        body {
            font-family: "Times New Roman", Times, serif;
            display: flex;
            flex-direction: column;
            justify-content: flex-start; /* 将内容置于顶部 */
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .content {
            text-align: center;
        }
    </style>
    <script>
        function copyEmail() {
            var email = "your.email@example.com"; // 你的邮箱地址
            var textarea = document.createElement("textarea");
            textarea.value = email;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
            alert("邮箱地址已复制到剪贴板: " + email);
        }
    </script>
</head>
<body>
    <div class="content">
        <h1>Contact Information</h1>
        <p>If you have any questions or need assistance, please feel free to contact us via email:</p>
        <p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
        <button onclick="copyEmail()">复制邮箱地址</button>
    </div>
</body>
</html>

```

在这个示例中，我们在CSS中将`justify-content`设置为`flex-start`，这将内容置于页面的顶部。这样文本内容将在页面水平居中并置于顶部显示。

要创建一个简约而漂亮的页面样式，你可以使用一些现代的设计原则和CSS样式。以下是一个简约风格的示例，同时保持页面的可读性和吸引力：

```
html<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us</title>
    <style>
        body {
            font-family: "Times New Roman", Times, serif;
            background-color: #f5f5f5;
            margin: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            height: 100vh;
        }

        .container {
            background-color: #fff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            text-align: center;
        }

        h1 {
            color: #333;
        }

        p {
            color: #666;
            margin: 10px 0;
        }

        a {
            color: #007bff;
            text-decoration: none;
        }

        button {
            background-color: #007bff;
            color: #fff;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
        }

        button:hover {
            background-color: #0056b3;
        }
    </style>
    <script>
        function copyEmail() {
            var email = "your.email@example.com"; // 你的邮箱地址
            var textarea = document.createElement("textarea");
            textarea.value = email;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
            alert("邮箱地址已复制到剪贴板: " + email);
        }
    </script>
</head>
<body>
    <div class="container">
        <h1>Contact Us</h1>
        <p>If you have any questions or need assistance, please feel free to contact us via email:</p>
        <p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
        <button onclick="copyEmail()">复制邮箱地址</button>
    </div>
</body>
</html>

```

在这个示例中，我们设置了页面的背景颜色、字体样式以及容器的样式。容器背景为白色，添加了阴影，使其脱颖而出。文本的颜色以及按钮的颜色都进行了调整以提供更好的对比度和可读性。按钮在悬停时会稍微变亮，以增加交互性。

你可以根据需要进一步调整颜色、字体和样式，以满足你的具体需求。

如果你希望为页面添加一些背景，你可以使用CSS的`background`属性来设置。以下是一个示例，其中包括一个背景图片：

```
html<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us</title>
    <style>
        body {
            font-family: "Times New Roman", Times, serif;
            background: url('background-image.jpg') no-repeat center center fixed;
            background-size: cover;
            margin: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            height: 100vh;
        }

        .container {
            background-color: rgba(255, 255, 255, 0.8);
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            text-align: center;
        }

        h1 {
            color: #333;
        }

        p {
            color: #666;
            margin: 10px 0;
        }

        a {
            color: #007bff;
            text-decoration: none;
        }

        button {
            background-color: #007bff;
            color: #fff;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
        }

        button:hover {
            background-color: #0056b3;
        }
    </style>
    <script>
        function copyEmail() {
            var email = "your.email@example.com"; // 你的邮箱地址
            var textarea = document.createElement("textarea");
            textarea.value = email;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
            alert("邮箱地址已复制到剪贴板: " + email);
        }
    </script>
</head>
<body>
    <div class="container">
        <h1>Contact Us</h1>
        <p>If you have any questions or need assistance, please feel free to contact us via email:</p>
        <p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
        <button onclick="copyEmail()">复制邮箱地址</button>
    </div>
</body>
</html>

```

在这个示例中，我们使用`background`属性为`body`元素添加了一个背景图片，并通过`background-size: cover`确保图片填充整个屏幕。背景图片文件需要替换为你自己的图片文件路径。

请注意，如果你使用背景图片，确保图片文件可用，并具有适当的授权。另外，背景图片的内容应该与页面的文字和按钮具有足够的对比度，以保持可读性。你可以根据需要调整透明度、颜色和图片以满足你的设计需求。

要创建一个中间的模块，当用户浏览页面时能够自动滚动，你可以使用CSS动画和HTML结构来实现这一点。以下是一个示例，其中添加了一个自动滚动的中间模块：

```
html<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us</title>
    <style>
        body {
            font-family: "Times New Roman", Times, serif;
            background: url('background-image.jpg') no-repeat center center fixed;
            background-size: cover;
            margin: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            height: 100vh;
        }

        .container {
            background-color: rgba(255, 255, 255, 0.8);
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            text-align: center;
            animation: slide 20s linear infinite; /* 添加自动滚动动画 */
        }

        @keyframes slide {
            0% {
                transform: translateY(0);
            }
            25% {
                transform: translateY(-25%);
            }
            50% {
                transform: translateY(-50%);
            }
            75% {
                transform: translateY(-75%);
            }
            100% {
                transform: translateY(0);
            }
        }

        h1 {
            color: #333;
        }

        p {
            color: #666;
            margin: 10px 0;
        }

        a {
            color: #007bff;
            text-decoration: none;
        }

        button {
            background-color: #007bff;
            color: #fff;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
        }

        button:hover {
            background-color: #0056b3;
        }
    </style>
    <script>
        function copyEmail() {
            var email = "your.email@example.com"; // 你的邮箱地址
            var textarea = document.createElement("textarea");
            textarea.value = email;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
            alert("邮箱地址已复制到剪贴板: " + email);
        }
    </script>
</head>
<body>
    <div class="container">
        <h1>Contact Us</h1>
        <p>If you have any questions or need assistance, please feel free to contact us via email:</p>
        <p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
        <button onclick="copyEmail()">复制邮箱地址</button>
    </div>
</body>
</html>

```

在这个示例中，我们为`.container`元素添加了一个名为`slide`的CSS动画。这个动画将使容器在页面上垂直移动。通过调整`@keyframes slide`中的百分比值，你可以控制滚动的速度和方向。这个示例中的动画会在垂直方向上无限循环滚动。

请注意，这是一个简单的示例，你可以根据需要进一步自定义动画效果、滚动速度和方向。

如果你希望容器在页面内部滚动，而不超出边框，你可以使用`overflow`属性来控制容器的滚动范围。以下是一个示例，将容器限制在页面内部滚动：

```
html<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us</title>
    <style>
        body {
            font-family: "Times New Roman", Times, serif;
            background: url('background-image.jpg') no-repeat center center fixed;
            background-size: cover;
            margin: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            height: 100vh;
            overflow: hidden; /* 隐藏页面外部的滚动条 */
        }

        .container {
            background-color: rgba(255, 255, 255, 0.8);
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            text-align: center;
            animation: slide 20s linear infinite;
            max-height: 80vh; /* 设置最大高度，限制滚动范围 */
            overflow: auto; /* 添加容器内部的滚动条 */
        }

        @keyframes slide {
            0% {
                transform: translateY(0);
            }
            25% {
                transform: translateY(-25%);
            }
            50% {
                transform: translateY(-50%);
            }
            75% {
                transform: translateY(-75%);
            }
            100% {
                transform: translateY(0);
            }
        }

        h1 {
            color: #333;
        }

        p {
            color: #666;
            margin: 10px 0;
        }

        a {
            color: #007bff;
            text-decoration: none;
        }

        button {
            background-color: #007bff;
            color: #fff;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
        }

        button:hover {
            background-color: #0056b3;
        }
    </style>
    <script>
        function copyEmail() {
            var email = "your.email@example.com";
            var textarea = document.createElement("textarea");
            textarea.value = email;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
            alert("邮箱地址已复制到剪贴板: " + email);
        }
    </script>
</head>
<body>
    <div class="container">
        <h1>Contact Us</h1>
        <p>If you have any questions or need assistance, please feel free to contact us via email:</p>
        <p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
        <button onclick="copyEmail()">复制邮箱地址</button>
    </div>
</body>
</html>

```

在这个示例中，我们通过设置`max-height`和`overflow`属性来限制容器的最大高度，并在内容溢出时显示滚动条。同时，我们还设置了`overflow: hidden`来隐藏页面外部的滚动条，以确保内容只在容器内滚动。这样，容器会在页面内部滚动，但不会移到边框外。你可以根据需要调整最大高度和滚动效果。

要在文本中添加图标描述，你可以使用图标字体或嵌入图像。以下是一个使用Font Awesome图标字体的示例：

首先，确保你在HTML文档的`<head>`部分引入Font Awesome图标库：

```
html<head>
    <!-- 其他内容 -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>

```

然后，在文本中使用Font Awesome图标并添加描述。例如：

```
html<p>If you have any questions or need assistance, please feel free to contact us via email: <i class="fa fa-envelope"></i> Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>

```

在这个示例中，`<i class="fa fa-envelope"></i>` 使用了Font Awesome中的信封图标，并将它与文本一起显示在段落中。

如果你希望使用其他图标库或嵌入自定义图像，你可以使用类似的方法，只需将图标或图像嵌入到文本中并添加描述。记得适当调整图标或图像的大小和样式，以满足你的设计需求。

若要在容器内添加图标，你可以使用Font Awesome图标字体或嵌入图像。以下是一个示例，演示如何在容器内添加一些Font Awesome图标：

首先，确保你在HTML文档的`<head>`部分引入Font Awesome图标库，方法与之前相同：

```
html<head>
    <!-- 其他内容 -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>

```

然后，在容器内添加图标并描述。例如：

```
html<div class="container">
    <i class="fa fa-phone"></i> Phone: +123456789<br>
    <i class="fa fa-envelope"></i> Email: <a href="mailto:your.email@example.com">your.email@example.com</a><br>
    <i class="fa fa-map-marker"></i> Address: 123 Main Street, City
</div>

```

在这个示例中，我们在容器内使用了多个Font Awesome图标，并将它们与文本一起显示。你可以使用不同的图标类名和描述，以满足你的需求。

如果你希望使用其他图标库或嵌入自定义图像，可以采用类似的方法，只需将图标或图像嵌入到容器内并添加描述。然后，你可以通过CSS来控制它们的样式，包括大小和颜色。

要将容器的背景颜色更改为浅灰色，你可以在容器的CSS样式中使用`background-color`属性。以下是更新后的示例，将容器的背景颜色更改为浅灰色：

```
html<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us</title>
    <style>
        body {
            font-family: "Times New Roman", Times, serif;
            background: url('background-image.jpg') no-repeat center center fixed;
            background-size: cover;
            margin: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            height: 100vh;
            overflow: hidden;
        }

        .container {
            background-color: #f0f0f0; /* 更改背景颜色为浅灰色 */
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            text-align: center;
            animation: slide 20s linear infinite;
            max-height: 80vh;
            overflow: auto;
        }

        @keyframes slide {
            0% {
                transform: translateY(0);
            }
            25% {
                transform: translateY(-25%);
            }
            50% {
                transform: translateY(-50%);
            }
            75% {
                transform: translateY(-75%);
            }
            100% {
                transform: translateY(0);
            }
        }

        h1 {
            color: #333;
        }

        p {
            color: #666;
            margin: 10px 0;
        }

        a {
            color: #007bff;
            text-decoration: none;
        }

        button {
            background-color: #007bff;
            color: #fff;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
        }

        button:hover {
            background-color: #0056b3;
        }
    </style>
    <script>
        function copyEmail() {
            var email = "your.email@example.com";
            var textarea = document.createElement("textarea");
            textarea.value = email;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
            alert("邮箱地址已复制到剪贴板: " + email);
        }
    </script>
</head>
<body>
    <div class="container">
        <h1>Contact Us</h1>
        <p>If you have any questions or need assistance, please feel free to contact us via email:</p>
        <p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
        <button onclick="copyEmail()">复制邮箱地址</button>
    </div>
</body>
</html>

```

在这个示例中，我们将`.container`的`background-color`属性设置为浅灰色（`#f0f0f0`），以改变容器的背景颜色。你可以根据需要调整颜色的值，以满足你的设计要求。

要将容器框居中，你可以使用CSS来控制容器的位置。以下是一个示例，将容器居中显示：

```
html<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us</title>
    <style>
        body {
            font-family: "Times New Roman", Times, serif;
            background: url('background-image.jpg') no-repeat center center fixed;
            background-size: cover;
            margin: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center; /* 将内容垂直和水平居中显示 */
            height: 100vh;
            overflow: hidden;
        }

        .container {
            background-color: #f0f0f0;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            text-align: center;
            animation: slide 20s linear infinite;
            max-height: 80vh;
            overflow: auto;
        }

        @keyframes slide {
            0% {
                transform: translateY(0);
            }
            25% {
                transform: translateY(-25%);
            }
            50% {
                transform: translateY(-50%);
            }
            75% {
                transform: translateY(-75%);
            }
            100% {
                transform: translateY(0);
            }
        }

        h1 {
            color: #333;
        }

        p {
            color: #666;
            margin: 10px 0;
        }

        a {
            color: #007bff;
            text-decoration: none;
        }

        button {
            background-color: #007bff;
            color: #fff;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
        }

        button:hover {
            background-color: #0056b3;
        }
    </style>
    <script>
        function copyEmail() {
            var email = "your.email@example.com";
            var textarea = document.createElement("textarea");
            textarea.value = email;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
            alert("邮箱地址已复制到剪贴板: " + email);
        }
    </script>
</head>
<body>
    <div class="container">
        <h1>Contact Us</h1>
        <p>If you have any questions or need assistance, please feel free to contact us via email:</p>
        <p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
        <button onclick="copyEmail()">复制邮箱地址</button>
    </div>
</body>
</html>

```

在这个示例中，我们使用了`align-items`和`justify-content`属性来将页面内容水平和垂直居中显示。这将使容器框以及其中的文本和图标都在页面的中央。