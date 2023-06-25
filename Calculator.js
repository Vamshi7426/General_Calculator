<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator Project</title>
    <style>
        body{
            background-color: beige;
            /*background-image: url("https://i5.walmartimages.com/asr/a8bd146f-8ba7-4268-a7d3-c037157ec66c_1.9b3ad6e4ac426c77e53fc1cce8a3d7fc.jpeg");
            background-size:60%;
            background-position:center;
            background-repeat: no-repeat;*/
          
        }
        .Title {
      margin: 0 auto;
      width: 220px;
      /* Additional styles for the "Title" div */
      margin-top: 25px;
      padding: 12px;
      border: 3px solid black;
      text-align: center;
      font-size: large;
      color: blue;
    }

    table {
      margin: 0 auto;
      margin-top: 20px;
      padding: 5px;
    }
        input[type="button"] {
            background-color: black;
            color:white;
            border:solid black 2px;
            width:100%;
            padding:10px;
            font-size: medium;
        
        }

        input[type="text"]{
            background-color: white;
            border:2px solid black;
            width: 100%;
            padding:10px;
            font-size: medium;
        }
        </style>
</head>
<body>
    <div class="Title">General Calculator</div>
    <table >
        <tr>
            <td colspan="3"><input type="text" id="result"></td>
            <td><input type="button" value="c" onclick="clr()"></td>
        </tr>
        <tr>
            <td><input type="button" value="1" onclick="display('1')"></td>
            <td><input type="button" value="2" onclick="display('2')"></td>
            <td><input type="button" value="3" onclick="display('3')"></td>
            <td><input type="button" value="/" onclick="display('/')"></td>
        </tr>
        <tr>
            <td><input type="button" value="4" onclick="display('4')"></td>
            <td><input type="button" value="5" onclick="display('5')"></td>
            <td><input type="button" value="6" onclick="display('6')"></td>
            <td><input type="button" value="-" onclick="display('-')"></td>
        </tr>
        <tr>
            <td><input type="button" value="7" onclick="display('7')"></td>
            <td><input type="button" value="8" onclick="display('8')"></td>
            <td><input type="button" value="9" onclick="display('9')"></td>
            <td><input type="button" value="+" onclick="display('+')"></td>
        </tr>
        <tr>
            <td><input type="button" value="." onclick="display('.')"></td>
            <td><input type="button" value="0" onclick="display('0')"></td>
            <td><input type="button" value="=" onclick="equate()"></td>
            <td><input type="button" value="*" onclick="display('*')"></td>
        </tr>
    </table>

    <script type="text/javascript">
        function clr(){
            document.getElementById("result").value=" ";
            //to show clear(nothing) in display


        }
        function display(val){   //given val argument to display values typed
            document.getElementById("result").value+=val //val=val+val added beside number

        }
        function equate(){
            let x=document.getElementById("result").value;  //for displaying wtever typed in display
            let y= eval(x);                      //to evaluate given equation.
            document.getElementById("result").value=y;  //displaying result in display again.


        }
    </script>
    
</body>
</html>
