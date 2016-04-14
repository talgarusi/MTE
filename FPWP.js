
map = (function() {
    
    var configMap = {
        loginHTML:  '',
        mainHTML :
                    '<header>MTE</header>'+
                    '<div>'+
                    '<ul>'+
                    '<li><button type="button" id = "btn_expenses">expenses</button></li>'+
                    '<li><button type="button" id  = "btn_personalProgram">personal program</button></li>'+
                    '<li><button type="button" id = "btn_catgory">catgory</button></li>'+
                    '<li><button type="button" id="btn_signIn">Sign in</button></li>'+
                    '</ul>'+
                    '</div>'+
                    '<div class  = "leftSideProfile">'+
                    '<center><img src="http://shaytavor.com/wp-content/uploads/Shay-199x300.jpg" alt="Mountain View" style="width:95%;height:30%;"></center>'+
                    'Name: </br>'+
                    '<li2><b class="uk-panel uk-panel-divider"><div id = "Name"></div></b></li2>'+
                    '</br>'+
                    'Age: </br>'+
                    '<li2><b class="uk-panel uk-panel-divider"><div id = "Age"></div></b></li2>'+
                    '</br>'+
                    'ID: </br>'+
                    '<li2><b class="uk-panel uk-panel-divider"><div id = "ID"></div></b></li2>'+
                    '</br>'+
                    '</div>'+
                    '<div id = "midlleBox">'+
                    ' </div>'+
                    '<footer>all rights reserved to MTE©</footer>',
        signInHTML:
                '<div id="abc">'+
                '<div id="popupContact">'+
                '<!-- Contact Us Form -->'+
                '<form action="#" id="form" method="post" name="form">'+
                '<h2>Contact Us</h2>'+
                '<hr>'+
                '<input id="name" name="name" placeholder="Name" type="data">'+
                '</br>'+
                '<input id="lname" name="last name" placeholder="Last Name" type="data">'+
                '</br>'+
                '<input id="age" name="email" placeholder="age" type="data">'+
                '</br>'+
                '<input id="id" name="email" placeholder="id" type="data">'+
                '</br>'+
                '<input id="salary" name="email" placeholder="Average slary" type="data">'+
                '</br>'+
                '<input id="stn_signInSub" name="email" type="button" value = "sign in"> '+
                '</form>'+
                '</div>'+
                '</div>',
        expensesHTML:
                    '<ul>'+
                    '<li><button type="button" id = "btn_expenses_new">new</button></li>'+
                    '<li><button type="button" id  = "btn_expenses_edit">edit</button></li>'+
                    '<li><button type="button" id = btn_expenses_table>table</button></li>'+
                    '</ul>'+
                    '<div id = "midlleBoxExpense">',
        expensesNewHTML:
                    '<center><div id = "div2">'+
                    '<center><h3>new expenses</h3></center>'+
                    '<label for="fname">Name</label>'+
                    '</br>'+
                    '<input type="text" id="fname" name="firstname">'+
                    '</br>'+
                    '<label for="lname">Last Name</label>'+
                    '</br>'+
                    '<input type="text" id="lname" name="Lastname">'+
                    '</br>'+
                    '<label for="description">Description</label>'+
                    '</br>'+
                    '<input type="text" id="description" name="Description">'+
                    '</br>'+
                    '<label for="amount">Amount In Isreali Shekel</label>'+
                    '</br>'+
                    '<input type="text" id="amount" name="amount">'+
                    '</br>'+
                    '<label for="lname">date</label>'+
                    '</br>'+
                    '<input type="date" id="date" name="Date">'+
                    '</br>'+
                    ' <label for="catgory">Catgory</label>'+
                    '</br>'+
                    '<select id="catgory" name="Catgory">'+
                    '<option value="Transportation">Transportation</option>'+
                    '<option value="Rent">Rent</option>'+
                    '<option value="shoping">Shoping</option>'+
                    '<option value="Hobbies">Hobbies</option>'+
                    '<option value="pleasure">Pleasure</option>'+
                    '<option value="Fixed Bills">Fixed Bills</option>'+
                    '</select>'+
                    ' </br>'+
                    '<input type="button" value="Add" id = "btn_add_exp">'+
                    '</div></center>',
        expensesEditHTML:
                    '</br></br></br>'+
                    '<center><h2>moshe hmniak Edit the table:</h2></center>'+
                    '<center><table>'+
                    '<tr>'+
                    '<th>name</th>'+
                    '<th>amount</th>'+
                    '</tr>'+
                    '<tr>'+
                    '<td><input type="text" id="ExpensesEditName"></td>'+
                    '<td><input type="text" id="ExpensesEditAmount"></td>'+
                    '</tr>'+
                    '</form></td>'+
                    '</table>'+
                    '</center>'+

                              '</br></br>'+
                        '<center><h2>expenses by table:</h2></center>'+
                        '</br></br></br>'+
                        '<center><div id="table-wrapper">'+
                        '<div id="table-scroll"></div></div>'+
                        '<input type="button" value="search" id = "search">'+
                        '</center>',

        expensesTableHTML:
                        '</br></br></br>'+
                        '<center><div id="table-wrapper">'+
                        '<div id="table-scroll"></div></div>'+
                        '</center>',
        prsonalProgramHTML:
                    '<ul>'+
                    '<li><button type="button" id = "btn_PP_newP">new program</button></li>'+
                    '<li><button type="button" id  = "btn_PP_Graph">graph</button></li>'+
                    '</ul>'+
                    '<div id = "midlleBoxPP">',
        personalProgramNewHtml:
                    '</br></br></br><center><table><tr>'+
                    '<th>catgory</th>'+
                    '<td>amount'+
                    '</tr>'+
                    '<th>Transportation</th>'+
                    '<td><input class="textbox" type="number" id = "tPP" name="quantity" min="1" max="100">'+
                    '</tr>'+
                    '<th>Rent</th>'+
                    '<td><input class="textbox" type="number" id = "rPP" name="quantity" min="1" max="100">'+
                    '</tr>'+
                    '<th>Shoping</th>'+
                    '<td><input class="textbox" type="number" id = "sPP" name="quantity" min="1" max="100">'+
                    '</tr>'+
                    '<th>Hobbis</th>'+
                    '<td><input class="textbox" type="number" id = "hPP" name="quantity" min="1" max="100">'+
                    '</tr>'+
                    '<th>Pleasure</th>'+
                    '<td><input class="textbox" type="number" id = "pPP" name="quantity" min="1" max="100">'+
                    '</tr>'+
                    '<th>Fixed Bills</th>'+
                    '<td><input class="textbox" type="number" id = "FBPP" name="quantity" min="1" max="100">'+
                    '</tr>'+
                    '</form></td>'+
                    '</table>'+
                    '<input type="button" value="Add" id = "btn_add_PP"></center>',

        personalProgramGraphHtml:
                    '<center><div id = "piechart"></div></center>',
        catgoryHTML:
                    '</br></br>'+
                    '<center><table>'+
                    '<tr>'+
                    '<th>catgory:</th>'+
                    '<th>Sum In Isreali Shekel:</th>'+
                    '<th>Amount  Of  Items</th>'+
                    '<th>Last update date</th>'+
                    '</tr>'+
                    '<tr>'+
                    '<th>Transportation</th>'+
                    '<td><div id = "traSum"></div></td>'+
                    '<td><div id = "traAmu"></div></td>'+
                    '<td><div id = "tradat"></div></td>'+
                    '</tr>'+
                    '<th>Rent</th>'+
                    '<td><div id = "rentSum"></div></td>'+
                    '<td><div id = "rentAmu"></div></td>'+
                    '<td><div id = "rentdat"></div></td>'+
                    '<tr>'+
                    '<th>Shoping</th>'+
                    '<td><div id = "shopSum"></div></td>'+
                    '<td><div id = "shopAmu"></div></td>'+
                    '<td><div id = "shopdat"></div></td>'+
                    '<tr>'+
                    '<th>Hobbies</th>'+
                    '<td><div id = "hubSum"></div></td>'+
                    '<td><div id = "hubAmu"></div></td>'+
                    '<td><div id = "hubdat"></div></td>'+
                    '<tr>'+
                    '<th>Peasure</th>'+
                    '<td><div id = "peasSum"></div></td>'+
                    '<td><div id = "peasAmu"></div></td>'+
                    '<td><div id = "peasdat"></div></td>'+
                    '<tr>'+
                    '<th>Fixed Bills</th>'+
                    '<td><div id = "FBSum"></div></td>'+
                    '<td><div id = "FBAmu"></div></td>'+
                    '<td><div id = "FBdat"></div></td>'+
                    '<tr>'+
                    '</tr>'+
                    '<tr>'+
                    '</tr>'+
                    '<tr>'+
                    '</tr>'+
                    '</table></center>'+
                    '</body></html>'+
                    '',
        
        
    };


var js = document.createElement("script");



        


    var stateMap = {$container : null};
    var initModule = function($container) {
        stateMap.$container = $container;
        $container.html(configMap.mainHTML);
        
        //open virtual user
        var user = new User("Moshe" , "Nagdai" , 123456 , 25);
        
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);       
        function drawChart() {
            var exArray = user.getExpenses();
            var i =0;
            var Tamount = 0;
            var Ramount = 0;
            var Samount = 0;
            var Hamount = 0;
            var Pamount = 0;
            var Famount = 0;

    
            for(;i<exArray.length;i++)
                {
                    if(exArray[i].getCatgory() == 'Transportation')
                        {
                            Tamount+= exArray[i].getSum();
                            
                        }
                    else if(exArray[i].getCatgory() == 'Rent')
                        {

                            Ramount+= exArray[i].getSum();
                        }
                    else if(exArray[i].getCatgory() == 'Shoping')
                        {

                            Samount+= exArray[i].getSum();  
                        }
                    else if(exArray[i].getCatgory() == 'Hobbies')
                        {
                            Hamount += exArray[i].getSum();

                        }
                    else if(exArray[i].getCatgory() == 'Peasure')
                        {

                            Pamount+= exArray[i].getSum();
                        }
                    else if(exArray[i].getCatgory() == 'Fixed Bills')
                        {
                            
                            Famount+= exArray[i].getSum();
                        }
                }
        
        //            var Tamount = 0;

            var data = google.visualization.arrayToDataTable([                

                ['Catgory', 'sum'],
                ['Transportation',Tamount],
                ['Rent',Ramount],
                ['Hobbies',Hamount],
                ['Pleasure',Pamount],
                ['Shoping',Samount],
                ['Fixed Bills',Famount]

                                                             
            ]);

            var options = {
            title:'the expenses in a pai graph',
              backgroundColor: '#E5E5E5'
            };

            var chart = new google.visualization.PieChart(document.getElementById('piechart'));

            chart.draw(data, options);  
        };
        //set details on profile box

        
        
        
        
/*
button listner 
*/
        
        
        
        
$.getScript("objects.js", function(){

   alert("Script loaded but not necessarily executed.");

});        
        
//clicked : "->catgory"
document.getElementById("btn_catgory").addEventListener("click", function(){  
    
            var midlleBox = document.getElementById("midlleBox");
            
    // delete all the html tagd in the midlle box
            
            cleanNodes(midlleBox);
    //here add the HTML
            var catgory = document.createElement('personalProgram');
            catgory.innerHTML = configMap.catgoryHTML;
            midlleBox.appendChild(catgory);
    
            var exArray = user.getExpenses();
    
            var i =0;
            var Tsum = 0;
            var Tdate = null;
            var Tamount = 0;
            var Rsum = 0;
            var Rdate= null;
            var Ramount = 0;
            var Ssum = 0;
            var Sdate= null;
            var Samount = 0;
            var Hsum = 0;
            var Hdate= null;
            var Hamount = 0;
            var Psum = 0;
            var Pdate= null;
            var Pamount = 0;
            var Fsum = 0;
            var Fdate= null;
            var Famount = 0;

    
            for(;i<exArray.length;i++)
                {
                    if(exArray[i].getCatgory() == 'Transportation')
                        {
                            Tsum += exArray[i].getSum();
                            if(Tdate ==null) Tdate = exArray[i].getDate();
                            else{
                                if(Tdate <exArray[i].getDate())
                                    Tdate = exArray[i].getDate();
                            }
                            
                            Tamount++;
                            
                        }
                    else if(exArray[i].getCatgory() == 'Rent')
                        {
                            Rsum += exArray[i].getSum();
                            if(Rdate ==null) Rdate = exArray[i].getDate();
                            else{
                                if(Rdate <exArray[i].getDate())
                                    Rdate = exArray[i].getDate();
                            }
                            
                            Ramount++;
                        }
                    else if(exArray[i].getCatgory() == 'Shoping')
                        {
                            Ssum += exArray[i].getSum();
                            if(Sdate ==null) Sdate = exArray[i].getDate();
                            else{
                                if(Sdate <exArray[i].getDate())
                                    Sdate = exArray[i].getDate();
                            }
                            
                            Samount++;  
                        }
                    else if(exArray[i].getCatgory() == 'Hobbies')
                        {
                            Hsum += exArray[i].getSum();
                            if(Hdate ==null) Hdate = exArray[i].getDate();
                            else{
                                if(Hdate <exArray[i].getDate())
                                    Hdate = exArray[i].getDate();
                            }
                            
                            Hamount++;
                        }
                    else if(exArray[i].getCatgory() == 'Peasure')
                        {
                            Psum += exArray[i].getSum();
                            if(Pdate ==null) Pdate = exArray[i].getDate();
                            else{
                                if(Pdate <exArray[i].getDate())
                                    Pdate = exArray[i].getDate();
                            }
                            
                            Pamount++;
                        }
                    else if(exArray[i].getCatgory() == 'Fixed Bills')
                        {
                            Fsum += exArray[i].getSum();
                            if(Fdate ==null) Fdate = exArray[i].getDate();
                            else{
                                if(Fdate <exArray[i].getDate())
                                    Fdate = exArray[i].getDate();
                            }
                            
                            Famount++;
                        }
                }
    
    //put in HTML the data
        document.getElementById("traSum").innerHTML = Tsum;
        document.getElementById("traAmu").innerHTML = Tamount;
        if(Tdate !=null)
                document.getElementById("tradat").innerHTML = Tdate.toString();
    
    
        document.getElementById("rentSum").innerHTML = Rsum;
        document.getElementById("rentAmu").innerHTML = Ramount;
        if(Rdate !=null)
                document.getElementById("rentdat").innerHTML = Rdate.toString();
    
    
        document.getElementById("shopSum").innerHTML = Ssum;
        document.getElementById("shopAmu").innerHTML = Samount;
        if(Sdate !=null)
                document.getElementById("shopdat").innerHTML = Sdate.toString();
    
    
        document.getElementById("hubSum").innerHTML = Hsum;
        document.getElementById("hubAmu").innerHTML = Hamount;
        if(Hdate !=null)
                document.getElementById("hubdat").innerHTML = Hdate.toString();
    
    
        document.getElementById("peasSum").innerHTML = Psum;
        document.getElementById("peasAmu").innerHTML = Pamount;
        if(Pdate !=null)
                document.getElementById("peasdat").innerHTML = Pdate.toString();
    
    
        document.getElementById("FBSum").innerHTML = Fsum;
        document.getElementById("FBAmu").innerHTML = Famount;
        if(Fdate !=null)
                document.getElementById("FBdat").innerHTML = Fdate.toString();

        

    
    
    
            
    
});

        
        
        
        
 //clicked : "->private program"       
document.getElementById("btn_personalProgram").addEventListener("click", function(){
            var midlleBox = document.getElementById("midlleBox");
            
    // delete all the html tagd in the midlle box
    cleanNodes(midlleBox);

    //here add the HTML
    var PP = document.createElement('PP');
    PP.innerHTML = configMap.prsonalProgramHTML;
    midlleBox.appendChild(PP);
    
    var midlleBoxPP = document.getElementById("midlleBoxPP");
    
    //~~~~~~~~~~~~~~~~~~~button controllers~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~```
    //clicked : "->private program-> newP"  
    document.getElementById("btn_PP_newP").addEventListener("click", function(){
        cleanNodes(midlleBoxPP);
        midlleBoxPP.innerHTML = configMap.personalProgramNewHtml;
        //btn_add_PP
            
            document.getElementById("btn_add_PP").addEventListener("click", function(){
        

                    var catgoryArray = [
                        ['Transportation','input1'],
                        ['Rent','input2'],
                        ['Shoping','input3'],
                        ['Hobbies','input4'],
                        ['Pleasure','input5'],
                        ['Fixed Bills','input6']
                    ];
                    catgoryArray[0][1] = document.getElementById("tPP").value;
                    catgoryArray[1][1] = document.getElementById("rPP").value;
                    catgoryArray[2][1] = document.getElementById("sPP").value;
                    catgoryArray[3][1] = document.getElementById("hPP").value;
                    catgoryArray[4][1] = document.getElementById("pPP").value;
                    catgoryArray[5][1] = document.getElementById("FBPP").value;
                
                //check if the sum of the user is less than 100% unless print error
                    var i=0 , sum=0;
                    for( ; i< catgoryArray.length;i++ )
                        {
                            sum=sum + Number(catgoryArray[i][1]);
                        }
                alert(sum);
                if(sum>100)
                    {
                        alert("Error - the sum of all precentage must be less than 100");
                    }
                else{
                    //fill me
                    var p = new PrivateProgram(user.getSalary() , catgoryArray);
                    user.addProgram(p);
                    
                }
                
            });

        
    });
    
    
    //clicked : "->private program-> Graphz"  
    document.getElementById("btn_PP_Graph").addEventListener("click", function(){
        cleanNodes(midlleBoxPP);
        midlleBoxPP.innerHTML = configMap.personalProgramGraphHtml;


        drawChart();


        
    });

});
 
document.getElementById("btn_signIn").addEventListener("click", function(){
    
    var midlleBox = document.getElementById("midlleBox");
            
    // delete all the html tagd in the midlle box
    cleanNodes(midlleBox);
    midlleBox.innerHTML = configMap.signInHTML;
    
    document.getElementById("stn_signInSub").addEventListener("click", function(){
            var valid = true;
            
            var name = document.getElementById("name").value;
            if(name == "" || !isNaN(name))
                valid = false;
    
            var lname = document.getElementById("lname").value;
            if(lname == "" || !isNaN(lname))
                valid = false;
    
            var age = Number(document.getElementById("age").value);
                if(isNaN(document.getElementById("age").value)   ||  age < 0)
                    valid = false;
            var id = Number(document.getElementById("id").value);
                if(isNaN(document.getElementById("id").value)   ||  id < 0)
                    valid = false;
            var salary = Number(document.getElementById("salary").value);
                if(isNaN(document.getElementById("salary").value)   || salary < 0)
                    valid = false;
                

            
            if(valid == false)
                    alert("Error");
            else
                {
                    user = new User(name , lname ,id , age, salary );
                    cleanNodes(midlleBox);
                    fillSideBox();


                }
    });

    });
        
        
        
        
//clicked : "->expenses"  
document.getElementById("btn_expenses").addEventListener("click", function(){
            
    var midlleBox = document.getElementById("midlleBox");
            
    // delete all the html tagd in the midlle box
            
    cleanNodes(midlleBox);

            
    //here add the HTML
    var expenses = document.createElement('expenses');
    expenses.innerHTML = configMap.expensesHTML;
    midlleBox.appendChild(expenses);
    
    var midlleBoxExpense = document.getElementById("midlleBoxExpense");

    //~~~~~~~~~~~~~~~~~~~button controllers~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~```
    //clicked : "->expenses->new"
    document.getElementById("btn_expenses_new").addEventListener("click", function(){
        cleanNodes(midlleBoxExpense);
        midlleBoxExpense.innerHTML = configMap.expensesNewHTML;
        
        
        document.getElementById("btn_add_exp").addEventListener("click", function(){ 
            
            //get details
            
            var valid = true;
            
            var lname = document.getElementById("lname").value;
            if(lname == "" || !isNaN(lname))
                valid = false;
                
            var name = document.getElementById("fname").value;
            if(name == "" || !isNaN(name))
                valid = false;
            
            var des = document.getElementById("description").value;
            
            var date = document.getElementById("date").value;
            date = parseDate(date);
            if ( isNaN( date.getTime())  ) 
                    valid = false;
            
            var amount = Number(document.getElementById("amount").value);
                if(isNaN(document.getElementById("amount").value)   ||  amount < 0)
                    valid = false;
            
            var cat = document.getElementById("catgory").value;
            
            if(valid == false)
                    alert("Error");
            else
                {
                    //function Expenses(name, des , sum , ctgry, date)
                    var exp = new Expenses(name+' '+lname , des , amount , cat , date);
                    user.addExpenses(exp);
                }
            
                       
            
        });
        
        
        
        
    });
    //clicked : "->expenses->edit"
    document.getElementById("btn_expenses_edit").addEventListener("click", function(){
        cleanNodes(midlleBoxExpense);
        midlleBoxExpense.innerHTML = configMap.expensesEditHTML;
        
            document.getElementById("search").addEventListener("click", function(){
        var name = document.getElementById("ExpensesEditName").value;
                
                
                
        var sum = document.getElementById("ExpensesEditAmount").value;

        var expeArray =user.getExpenses();
                
        var filteredArray = [];

        var j=0;
        
        for(;j< expeArray.length;j++ )
            {
                alert(document.getElementById("ExpensesEditAmount").value);

                if((expeArray[j].getName() == name || name == "") && expeArray[j].getSum() == sum)
                    {
                        filteredArray[filteredArray.length] = expeArray[j];
                    }
            }
        
        
                var options = {
                        weekday: "long", year: "numeric", month: "short",
                        day: "numeric", hour: "2-digit", minute: "2-digit"
        };
        
        var HTML =      '<table><thead><tr>'+
                        '<th>name: </th>'+
                        '<th>Amount In Isreali Shekel</th>'+
                        '<th>description</th>'+
                        '<th>catgory</th>'+
                        '</tr></thead><tbody>';

        var user_expenses = user.getExpenses();
        var i =0;
        for( ;i<filteredArray.length ; i++ )
            {   
                HTML = HTML + '<tr>';
                HTML = HTML + '<td><input type="text" id="editName'+ i +'"value = "'+ filteredArray[i].getName() +'"</td>';
                HTML = HTML + '<td><input type="text" id="editSum'+ i +'"value = "'+ filteredArray[i].getSum()+'"></td>';
                HTML = HTML + '<td><input type="text" id="editDes'+ i +'"value = "'+ filteredArray[i].getDescription()+'"></td>';
                HTML = HTML + '<td><select id="Ecat'+i+'" name="Catgory">'+
                              '<option value="Transportation">Transportation</option>'+
                              '<option value="Rent">Rent</option>'+
                              '<option value="shoping">Shoping</option>'+
                              '<option value="Hobbies">Hobbies</option>'+
                              '<option value="pleasure">Pleasure</option>'+
                              '<option value="Fixed Bills">Fixed Bills</option>'+
                              '</select></td>';
                HTML = HTML + '</tr>';
                console
            }
                HTML  = HTML + '</tbody></table>';
                if(filteredArray.length > 0)
                    HTML  = HTML + '<input type="button" value="Save" id = "btn_save_exp">';
                
                
                document.getElementById("table-scroll").innerHTML =   HTML;           
                
                
                if(filteredArray.length > 0){
                document.getElementById("btn_save_exp").addEventListener("click", function(){
                    
                    var k=0;
                    
                    for(;k<filteredArray.length;k++)
                        {
                            var Ename = document.getElementById("editName"+k).value;
                            filteredArray[k].setName(Ename);
                            var Esum = Number(document.getElementById("editSum"+k).value);
                            filteredArray[k].setSum(Esum);
                            var Edes = document.getElementById("editDes"+k).value;
                            filteredArray[k].setDescription(Edes);
                            var Ecat = document.getElementById("Ecat"+k).value;
                            filteredArray[k].setCat(Ecat);
                        }
                });
                                                                         }



    });
    //clicked : "->expenses->table"
    document.getElementById("btn_expenses_table").addEventListener("click", function(){
        cleanNodes(midlleBoxExpense);
        midlleBoxExpense.innerHTML = configMap.expensesTableHTML;
        

        var options = {
                        weekday: "long", year: "numeric", month: "short",
                        day: "numeric", hour: "2-digit", minute: "2-digit"
        };
        
        var HTML =      '<table><thead><tr>'+
                        '<th>name: </th>'+
                        '<th>Amount In Isreali Shekel</th>'+
                        '<th>date</th>'+
                        '<th>description</th>'+
                        '<th>catgory</th>'+
                        '</tr></thead><tbody>';
        
        var user_expenses = user.getExpenses();
        var i =0;
        for( ;i<user_expenses.length ; i++ )
            {   
                HTML = HTML + '<tr>';
                HTML = HTML + '<th>'+user_expenses[i].getName()+'</th>';
                HTML = HTML + '<td>'+user_expenses[i].getSum()+'</td>';
                HTML = HTML + '<td>'+user_expenses[i].getDate().toLocaleTimeString("en-us", options)+'</td>';
                HTML = HTML + '<td>'+user_expenses[i].getDescription()+'</td>';
                HTML = HTML + '<td>'+user_expenses[i].getCatgory()+'</td>';
                HTML = HTML + '</tr>';
                console
            }
        HTML  = HTML + '</tbody></table>';
                document.getElementById("table-scroll").innerHTML =   HTML;
    });

        
    });
            
});
        
//privates functions
var cleanNodes = function(node){
            while (node.firstChild) {
                node.removeChild(node.firstChild);
            }
};
        
function parseDate(s) {
  var b = s.split(/\D/);
  return new Date(b[0], --b[1], b[2]);
}
        
var  fillSideBox = function(){
        document.getElementById("Name").innerHTML = user.getName() + ' ' + user.getLastName();
        document.getElementById("ID").innerHTML = user.getId();
        document.getElementById("Age").innerHTML = user.getAge();
}
        

        

    };
  
    return { initModule : initModule };
}());
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Objects description

1.User

2.Expenses

3.Category

4.SubCategory

5.PrivateProgram

*/
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~User~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
function User(name, last_name ,id , age , salary) {
    
    //attributes
        //the default of name and last name is "anonymous"
    if(name != null)
        this.name = name;
    else
        this.name = "anonymous";
    
    if(last_name != null)
        this.last_name = last_name;
    else
        this.last_name = "anonymous";
    
    this.Expenses = [];
    this.Categories = [];
    this.program = null;
    this.id = id;
    this.age = age;
    this.salary = salary;
    
    
    if(typeof this.getName != "function") {
        /*User function :
        1.(s/g)etName
        2.getLastName
        3.setLastName
        4.addExpenses
        5.getExpenses
        6.removeExpenses
        7.addProgram
        8.removeProgram
        9.addCategory
        10.getCategories
        11.removeCategory
        12.toString
        13.
        
        */
    User.prototype.getProgram = function() {
        return this.program;
  	};        
        
    User.prototype.getSalary = function() { 
        return this.salary;
  	};
        
    User.prototype.setSalary = function(salary) {
        this.salary = salary;
  	};    
        
    User.prototype.getAge = function() { 
        return this.age;
  	};
        
    User.prototype.setName = function(Age) {
        this.age = age;
  	};
        	User.prototype.getId = function() { 
        return this.id;
  	};
        
    User.prototype.setId = function(id) {
        this.id = id;
  	};
        
	User.prototype.getName = function() { 
        return this.name;
  	};
        
    User.prototype.setName = function(name) {
        this.name = name;
  	};
    User.prototype.getLastName = function() {
        return this.last_name;
  	};
        
    User.prototype.setLastName = function(l_name) {
        this.last_name = l_name;
  	};
    
    User.prototype.addExpenses = function(exp) {
        this.Expenses.push(exp);
  	};
    
    User.prototype.getExpenses = function() {//return array of expenses
        return this.Expenses;  
  	};

    User.prototype.removeExpenses = function(index) {//remove by index need to check if work
        this.Expenses.splice(index, 1);  
  	};
    
    User.prototype.addProgram = function(program) {//remove by index need to check if work
        this.program = program;  
  	};
        
    User.prototype.removeProgram = function(program) {//remove by index need to check if work
        this.program = null;  
  	};
        
    User.prototype.addCategory = function(ctgry) {//add a new catgory
        this.Categories.push(ctgry);
  	};
    
    User.prototype.getCategories = function() {//return the array of categories
        return this.Categories;  
  	};
        
    User.prototype.removeCategory = function(index) {//remove by index need to check if work
        this.Category.splice(index, 1);  
  	};
        
    User.prototype.toString = function() {
        return this.name + " " +this.last_name;
  	};
    
        
   }
}



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Expenses~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

function Expenses(name, des , sum , ctgry, date) {
    
    //attributes
    this.name = name;
    this.description = des;
    this.sum = sum;
    this.category = ctgry;
    
    if(Date.now()<date || date == null)
        this.date = Date.now();
    else
        this.date = date;
        
    
    
    if(typeof this.getName!= "function") {
        /*User function :
        1.(g/s)etName
        2.getDescription
        3.setDescription
        4.getSum
        5.setSum
        6.changeDate
        7.changeSubCatgory 
        8.setCat

        
        */
        
    Expenses.prototype.setCat = function(cat) {
        this.category = cat;
  	};    
        
	Expenses.prototype.getName = function() {
        return this.name;
  	};
        
    Expenses.prototype.setName = function(name) {
        this.name = name;
  	};
    Expenses.prototype.getDescription = function() {
        return this.description;
  	};
        
    Expenses.prototype.setDescription = function(des) {
        this.description = des;
  	};
    
    Expenses.prototype.getSum = function() {
        return this.sum;
  	};
    
    Expenses.prototype.setSum = function(sum) {
        
        if(sum < 0 )
            this.sum = 0;
        else
            this.sum = sum;
  	};

    Expenses.prototype.changeDate = function(date) {
        
    if(Date.now()<date || date == null)
        this.date = Date.now();
    else
        this.date = date;
        
  	};
    
    Expenses.prototype.getDate= function() {
        
        return this.date;
  	};
        
    Expenses.prototype.changeSubCatgory = function(sCtgry) {
        this.subCatgory  = sCtgry;
  	};
        
    Expenses.prototype.getCatgory = function() {
        return this.category;
  	};
        
        
   }
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Category~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
function Category(name) {
    
    //attributes
    this.name = name;
    this.subCatgories = [];
    
        
    
    if(typeof this.getName != "function") {
        /*User function :
        1.(g/s)etName
        2.getSubCatgories
        3.addSubCatgories
        4.removeSubCatgories
        
        */
	Category.prototype.getName = function() {
        return this.name;
  	};
        
    Category.prototype.setName = function(name) {
        this.name = name;
  	};
    Category.prototype.getSubCatgories  = function() {
        return this.subCatgories;
  	};
        
    Category.prototype.addSubCatgories = function(sCtgry) {
        this.subCatgories.push(sCtgry);
  	};
    
    Category.prototype.reomveSubCatgories = function(index) {
        this.subCatgories.splice(index , 1);
  	};
                
   }
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~SubCategory~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
function SubCategory(name) {
    
    //attributes
    this.name = name;
    
        
    
    if(typeof this.getName != "function") {
        /*User function :
        1.(g/s)etName

        
        */
	SubCategory.prototype.getName = function() {
        return this.name;
  	};
        
    SubCategory.prototype.setName = function(name) {
        this.name = name;
  	};
                
   }
}


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~PrivateProgram~~~~~~~~~~~~~~~~~~~~~~~~~~~~// 
//NOT COMPLETE
function PrivateProgram(income,arrayDivison) {
    
    //attributes
    this.income = income;
    this.arrayDivison = arrayDivison;
    
        
    
    if(typeof this.getName != "function") {
        /*User function :
        1.(g/s)etIncome
        2. ...
        3. ...
        4. ...
        .
        .
        .
        
        
        */
	SubCategory.prototype.getIncome = function() {
        return this.income;
  	};
        
    SubCategory.prototype.setIncome = function(income) {
        this.income = income;
  	};
        
    SubCategory.prototype.getArray = function() {
        return this.arrayDivison;
  	};
        
    SubCategory.prototype.setArray = function(array) {
        this.arrayDivison = arrayDivison;
    };

                
   }
}
