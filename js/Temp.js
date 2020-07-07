var next=1,count=0,i,current=0,Sub=1;
var element;
fetch('https://script.googleusercontent.com/macros/echo?user_content_key=iqpr_nSj9863rDCkWD2EPlQpPPmaC5M-gP5l2sZ1leiBSyWeuIrCOCfkjchTux1DKOS9hPSFDusxwJL-CL_NLt18-1QjXRUtm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnAySKpJL8N30HPA92sN40NPBcNPXJ4rfjaShzlmcPBPCFdhyww2uoYdfdTzIuODcDuIqWsDnSrEd&lib=M0d63TuTK_fpW5GBr53sEZTOZrByLPA1_')
.then(response => response.json())
.then(file_source => {
  console.log(file_source) // Prints result from `response.json()` in getRequest
})
$(document).ready(function(){
    $("#NoButton").click(function(){
        for(i=next;i<(file_source.user.length-1);i++)
        {
            if(file_source.user[i].Level==(Sub+''))
            {
                if(file_source.user[i].Status=="1")
                next++;
                else
                break;
            }
            else
            next++;
        }
        $("#quality").text(file_source.user[next].Name)
        $("#Quality_desc").text(file_source.user[next].Description)
        current=next;
        if(next==(file_source.user.length-1))
        alert("Sorry, No More Qualities present now");    
        else
        next++;
    });
});
$(document).ready(function(){
    $("#YesButton").click(function(){
        if (Sub==2 && count==24)
        alert("You can't select more than 24 qualities");
        else if (Sub==3 && count==6)
        alert("You can't select more than 6 qualities");
        else
        {
            for(i=next;i<(file_source.user.length-1);i++)
            {
                if(file_source.user[i].Level==(Sub+''))
                {
                    if(file_source.user[i].Status=="1")
                    {
                        next++;
                    }
                    else
                    break;
                }
                else
                next++;
            }    
            $("#quality").text(file_source.user[next].Name)
            $("#Quality_desc").text(file_source.user[next].Description)
            if(next==(file_source.user.length-1))
            {
                if(current!=next)
                {
                    $("#Second_Row").append("<button type='button' class='Qual' id='qual_"+current+"' onclick='labelfunc("+current+")'>"+file_source.user[current].Name+"</button>")
                    file_source.user[current].Status='1';
                    count++;
                    document.getElementById("Selection_count").textContent=count+"";
                }
                alert("Sorry, No More Qualities present now"); 
                current=next;
            }   
            else
            {
                $("#Second_Row").append("<button type='button' class='Qual' id='qual_"+current+"' onclick='labelfunc("+current+")'>"+file_source.user[current].Name+"</button>")
                file_source.user[current].Status='1';
                current=next;
                next++;
                count++;
                document.getElementById("Selection_count").textContent=count+"";
            }
        }
    });
});
$(document).ready(function(){
    $("#BackButton").click(function(){
        next=current-1;
        for (i=next;i>=0; i--) 
        {
            if(file_source.user[i].Level==(Sub+''))
            {
                if(file_source.user[i].Status=='1')
                next--;
                else
                break;
            }
            else
            next--;
        }
        if(next==-1)
        {
        alert("Sorry, No More Qualities present now");
        next=current+1;
        }
        else
        {
            $("#quality").text(file_source.user[next].Name)
            $("#Quality_desc").text(file_source.user[next].Description)
            current=next;
            next=current+1;
        }
    });
});
function labelfunc(num)
{
    element = document.getElementById('qual_'+num);
    element.parentNode.removeChild(element);
    file_source.user[num].Status='0';
    count--;
    document.getElementById("Selection_count").textContent=count+"";
}
$(document).ready(function(){
    $("#Sub").click(function(){
        if(Sub==1)
        {
            if(count<24)
            alert("Please select atleast 24 qualities");
            else if(count==24)
            {
                alert("Your qualites are submitted, Now please select exact 6 qualities");
                count=0;
                Sub=Sub+2;
                document.getElementById("Selection_count").textContent=count+"";
                for(i=0;i<(file_source.user.length-1);i++)
                {
                    if(file_source.user[i].Status=='1')
                    {
                        file_source.user[i].Level='3';
                        file_source.user[i].Status='0';
                        element = document.getElementById('qual_'+i);
                        element.parentNode.removeChild(element);
                    }
                }
                for(i=0;i<(file_source.user.length-1);i++)
                {
                    if(file_source.user[i].Level==(Sub+''))
                    {
                        next=i;
                        break;
                    }
                }
                $("#quality").text(file_source.user[next].Name)
                $("#Quality_desc").text(file_source.user[next].Description)
                current=next;
                next++;
            }
            else
            {
                alert("Your qualites are submitted, Now please select exact 24 qualities");
                count=0;
                Sub++;
                document.getElementById("Selection_count").textContent=count+"";
                for(i=0;i<(file_source.user.length-1);i++)
                {
                    if(file_source.user[i].Status=='1')
                    {
                        file_source.user[i].Level='2';
                        file_source.user[i].Status='0';
                        element = document.getElementById('qual_'+i);
                        element.parentNode.removeChild(element);
                    }
                }
                for(i=0;i<(file_source.user.length-1);i++)
                {
                    if(file_source.user[i].Level==(Sub+''))
                    {
                        next=i;
                        break;
                    }
                }
                $("#quality").text(file_source.user[next].Name)
                $("#Quality_desc").text(file_source.user[next].Description)
                current=next;
                next++;
            }
        }
        else if(Sub==2)
        {
            if(count==24)
            {
                alert("Your qualites are submitted, Now please select exact 6 qualities");
                count=0;
                Sub++;
                document.getElementById("Selection_count").textContent=count+"";
                for(i=0;i<(file_source.user.length-1);i++)
                {
                    if(file_source.user[i].Status=='1')
                    {
                        file_source.user[i].Level='3';
                        file_source.user[i].Status='0';
                        element = document.getElementById('qual_'+i);
                        element.parentNode.removeChild(element);
                    }
                }
                for(i=0;i<(file_source.user.length-1);i++)
                {
                    if(file_source.user[i].Level==(Sub+''))
                    {
                        next=i;
                        break;
                    }
                }
                $("#quality").text(file_source.user[next].Name)
                $("#Quality_desc").text(file_source.user[next].Description)
                current=next;
                next++;
            }
            else
            alert("PLease select exact 24 qualities");
        }
        else if(Sub==3)
        {
            if(count==6)
            {
                alert("Your qualites are submitted. Now order the top 6 qualites");
                Sub++;
                document.getElementById("Selection_count").textContent="Order top 6 qualites by giving top most quality the highest priority";
                for(i=0;i<(file_source.user.length-1);i++)
                {
                    if(file_source.user[i].Status=='1')
                    {
                        file_source.user[i].Level='4';
                        file_source.user[i].Status='0';
                    }
                }
                var x = document.getElementById("selectquality");
                x.style.display = "none";
                var n = document.getElementById("orderit");
                n.style.display = "block";
                var x = document.createElement("UL");
                for(i=0;i<(file_source.user.length-1);i++)
                {
                    if(file_source.user[i].Level=='4')
                    {
                        $("#sortable_quality").append('<li id="'+i+'">'+file_source.user[i].Name+'</li>');
                    }
                }
            }
            else
            alert("PLease select exact 6 qualities");
        }
        else if(Sub==4)
        {
            alert("Congratulations, your qualities are submitted");
            document.getElementById("Selection_count").textContent="Your top qualities are shown below";
            var x = document.getElementById("orderit");
            x.style.display = "none";
            var m = document.getElementById("FinalTable");
            m.style.display = "block";
            var n = document.getElementById("subm");
            n.style.display = "none";
            var idsInOrder = $("#sortable_quality").sortable("toArray");
            for(i=0;i<6;i++)
            $("#addquality").append('<tr><th>'+file_source.user[idsInOrder[i]].Name+'</th><th>'+file_source[idsInOrder[i]].Description+'</th></tr>');
        }
        else
        {
            alert("It is in the maintainence at the moment");
        }
    });
});
$(function() {
    $( "#sortable_quality" ).sortable();
 });