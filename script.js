var next=1,count=0,i,current=0,Sub=1;
var element;
var file_source=[
    [
        'Accuracy',
        'the quality or state of being correct or precise. Eg-"we have confidence in the accuracy of the statistics"',
        '0',
        '1'
    ],
    [
        'Acknowledged',
        'deep love and respect. Eg-"he gave her a look of adoration"',
        '0',
        '1'
    ],
    [
        'Adoration',
        'recognized as being good or important. Eg-"he is an acknowledged expert in the field"',
        '0',
        '1'
    ],
    [
        'Activeness',
        'engaging or ready to engage in physically energetic pursuits. Eg-"although he was seventy he was still robust and active"',
        '0',
        '1'
    ],
    [
        'Adaptability',
        'the quality of being able to adjust to new conditions. Eg-"adaptability is an advantage in the harshly competitive global economy"',
        '0',
        '1'
    ],
    [
        'Adroitness',
        'cleverness or skill. Eg-"he lacks political adroitness"',
        '0',
        '1'
    ],
    [
        'Adventure',
        'an unusual and exciting or daring experience. Eg-"her recent adventures in Italy"',
        '0',
        '1'
    ],
    [
        'Affection',
        'a gentle feeling of fondness or liking. Eg-"she felt affection for the wise old lady"',
        '0',
        '1'
    ],
    [
        'Affluence',
        'the state of having a great deal of money; wealth. Eg-"a sign of our growing affluence"',
        '0',
        '1'
    ],
    [
        'Aggressive',
        'ready or likely to attack or confront; characterized by or resulting from aggression. Eg-"he is very uncooperative and aggressive"',
        '0',
        '1'
    ],
    [
        'Agility',
        'ability to move quickly and easily. Eg- "though he was without formal training as dancer or athlete, his physical agility was inexhaustible"',
        '0',
        '1'
    ],
    [
        'Alertness',
        'the quality of being alert. Eg-"Walsall were indebted to the bravery and alertness of their goalkeeper"',
        '0',
        '1'
    ],
    [
        'Altruism',
        'disinterested and selfless concern for the well-being of others. Eg- "some may choose to work with vulnerable elderly people out of altruism"',
        '0',
        '1'
    ],
    [
        'Ambition',
        'a strong desire to do or achieve something. Eg- "her ambition was to become a pilot"',
        '0',
        '1'
    ],
    [
        'Amusement',
        'the state or experience of finding something funny. Eg-"we looked with amusement at our horoscopes"',
        '0',
        '1'
    ],
    [
        'Anticipation',
        'the action of anticipating something; expectation or prediction.  Eg-"her eyes sparkled with anticipation"',
        '0',
        '1'
    ],
    [
        'Appreciation',
        'recognition and enjoyment of the good qualities of someone or something.  Eg-"I smiled in appreciation"',
        '0',
        '1'
    ],
    [
        'Approachable',
        'friendly and easy to talk to. Eg-"managers should be approachable"',
        '0',
        '1'
    ],
    [
        'Articulate',
        'having or showing the ability to speak fluently and coherently. Eg-"an articulate account of their experiences"',
        '0',
        '1'
    ],
    [
        'Assertiveness',
        'confident and forceful behaviour. Eg-"she has difficulty standing up for herself, even when assertiveness may be warranted"',
        '0',
        '1'
    ],
    [
        'Assurance',
        'a positive declaration intended to give confidence; a promise. Eg-"he gave an assurance that work would begin on Monday"',
        '0',
        '1'
    ],
    [
        'Attentiveness',
        'the action of paying close attention to something. Eg-"half the children who ate the cereal showed no improvement in attentiveness"',
        '0',
        '1'
    ],
    [
        'Attractiveness',
        'the quality of being pleasing or appealing to the senses. Eg-"this scheme could enhance the attractiveness of the area"',
        '0',
        '1'
    ],
    [
        'Audacity',
        'a willingness to take bold risks. Eg-"he whistled at the sheer audacity of the plan"',
        '0',
        '1'
    ],
    [
        'Availability',
        'the quality of being able to be used or obtained. Eg-"turkey producers had been losing sales because of the all-year-round availability of beef"',
        '0',
        '1'
    ],
    [
        'Awareness',
        'knowledge or perception of a situation or fact. Eg-"we need to raise public awareness of the issue"',
        '0',
        '1'
    ],
    [
        'Awe',
        'a feeling of reverential respect mixed with fear or wonder. Eg-"they gazed in awe at the small mountain of diamonds"',
        '0',
        '1'
    ],
    [
        'Balance',
        'an even distribution of weight enabling someone or something to remain upright and steady. Eg-"she lost her balance and fell"',
        '0',
        '1'
    ],
    [
        'Beauty',
        'a combination of qualities, such as shape, colour, or form, that pleases the aesthetic senses, especially the sight. Eg-"I was struck by her beauty"',
        '0',
        '1'
    ],
    [
        '',
        '',
        '0',
        '1'
    ]
];
$(document).ready(function(){
    $("#next").click(function(){
        for(i=next;i<(file_source.length-1);i++)
        {
            if(file_source[i][3]==(Sub+''))
            {
                if(file_source[i][2]=="1")
                next++;
                else
                break;
            }
            else
            next++;
        }
        $("#quality").text(file_source[next][0])
        $("#Quality_desc").text(file_source[next][1])
        current=next;
        if(next==(file_source.length-1))
        alert();    
        else
        next++;
    });
});
$(document).ready(function(){
    $("#quality").click(function(){
        if (Sub==2 && count==24)
        alert("You can't select more than 24 qualities");
        else if (Sub==3 && count==6)
        alert("You can't select more than 6 qualities");
        else
        {
            for(i=next;i<(file_source.length-1);i++)
            {
                if(file_source[i][3]==(Sub+''))
                {
                    if(file_source[i][2]=="1")
                    next++;
                    else
                    break;
                }
                else
                next++;
            }    
            $("#quality").text(file_source[next][0])
            $("#Quality_desc").text(file_source[next][1])
            if(next==(file_source.length-1))
            {
                if(current!=next)
                {
                    $("#Second_Row").append("<li type='button' class='Qual' id='qual_"+current+"' onclick='labelfunc("+current+")'>"+file_source[current][0]+"</li>")
                    file_source[current][2]='1';
                    count++;
                    document.getElementById("Selection_count").textContent=count+"";
                }
                alert("Sorry, No More Qualities present now"); 
                current=next;
            }   
            else
            {
                $("#Second_Row").append("<li type='button' class='Qual' id='qual_"+current+"' onclick='labelfunc("+current+")'>"+file_source[current][0]+"</li>")
                file_source[current][2]='1';
                current=next;
                next++;
                count++;
                document.getElementById("Selection_count").textContent=count+"";
            }
        }
    });
});
$(document).ready(function(){
    $("#prev").click(function(){
        next=current-1;
        for (i=next;i>=0; i--) 
        {
            if(file_source[i][3]==(Sub+''))
            {
                if(file_source[i][2]=='1')
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
            $("#quality").text(file_source[next][0])
            $("#Quality_desc").text(file_source[next][1])
            current=next;
            next=current+1;
        }
    });
});
function labelfunc(num)
{
    element = document.getElementById('qual_'+num);
    element.parentNode.removeChild(element);
    file_source[num][2]='0';
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
                for(i=0;i<(file_source.length-1);i++)
                {
                    if(file_source[i][2]=='1')
                    {
                        file_source[i][3]='3';
                        file_source[i][2]='0';
                        element = document.getElementById('qual_'+i);
                        element.parentNode.removeChild(element);
                    }
                }
                for(i=0;i<(file_source.length-1);i++)
                {
                    if(file_source[i][3]==(Sub+''))
                    {
                        next=i;
                        break;
                    }
                }
                $("#quality").text(file_source[next][0])
                $("#Quality_desc").text(file_source[next][1])
                current=next;
                next++;
            }
            else
            {
                alert("Your qualites are submitted, Now please select exact 24 qualities");
                count=0;
                Sub++;
                document.getElementById("Selection_count").textContent=count+"";
                for(i=0;i<(file_source.length-1);i++)
                {
                    if(file_source[i][2]=='1')
                    {
                        file_source[i][3]='2';
                        file_source[i][2]='0';
                        element = document.getElementById('qual_'+i);
                        element.parentNode.removeChild(element);
                    }
                }
                for(i=0;i<(file_source.length-1);i++)
                {
                    if(file_source[i][3]==(Sub+''))
                    {
                        next=i;
                        break;
                    }
                }
                $("#quality").text(file_source[next][0])
                $("#Quality_desc").text(file_source[next][1])
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
                for(i=0;i<(file_source.length-1);i++)
                {
                    if(file_source[i][2]=='1')
                    {
                        file_source[i][3]='3';
                        file_source[i][2]='0';
                        element = document.getElementById('qual_'+i);
                        element.parentNode.removeChild(element);
                    }
                }
                for(i=0;i<(file_source.length-1);i++)
                {
                    if(file_source[i][3]==(Sub+''))
                    {
                        next=i;
                        break;
                    }
                }
                $("#quality").text(file_source[next][0])
                $("#Quality_desc").text(file_source[next][1])
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
                for(i=0;i<(file_source.length-1);i++)
                {
                    if(file_source[i][2]=='1')
                    {
                        file_source[i][3]='4';
                        file_source[i][2]='0';
                    }
                }
                var x = document.getElementById("selectquality");
                x.style.display = "none";
                var n = document.getElementById("orderit");
                n.style.display = "block";
                var x = document.createElement("UL");
                for(i=0;i<(file_source.length-1);i++)
                {
                    if(file_source[i][3]=='4')
                    {
                        $("#sortable_quality").append('<li id="'+i+'">'+file_source[i][0]+'</li>');
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
            $("#addquality").append('<tr><th>'+file_source[idsInOrder[i]][0]+'</th><th>'+file_source[idsInOrder[i]][1]+'</th></tr>');
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

   












       
   












