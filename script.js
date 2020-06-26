var current = 0, count,next=0;
var level=0;
var divValue,value='';
const list_items=document.querySelectorAll('.list-item');
const list=document.querySelectorAll('.list');
var draggeditem='',i,j;
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
$(document).ready(function () {
    $("#NoButton").click(function () {
        for(i=next;i<(file_source.length-1);i++)
        {
            if(file_source[i][2]=="1")
            next++;
            else
            break
	}
        $("#quality").text(file_source[next][0])
        $("#Quality_desc").text(file_source[next][1])
        current=next;
        if(next==(file_source.length-1))
        alert("Sorry, No More Qualities present now");    
        else
        next++;
    });
});
$(document).ready(function () {
    $("#YesButton").click(function () {
	for(i=next;i<(file_source.length-1);i++)
        {
            if(file_source[i][2]=="1")
            next++;
            else
            break
	}
        $("#quality").text(file_source[next][0])
        $("#Quality_desc").text(file_source[next][1])
        current=next;
        if(next==(file_source.length-1))
        alert("Sorry, No More Qualities present now");    
        else
        next++;
        var x = document.getElementById("Selection_count").textContent;
        count = parseInt(x);
        count++;
        document.getElementById("Selection_count").textContent = count + "";
        $("#Second_Row").append("<label class='ql' id='ql'>" + file_source[current][0] + "</label>")
        file_source[current][2] = 'Yes';
    });
});
$(document).ready(function(){
    $("#Backbutton").click(function(){
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
$(document).ready(function () {
    $("#btSubmit").click(function () {
        if(level==0){    
            if (count >= 24) {
                count=0;
                document.getElementById("Selection_count").textContent = count + "";
                current = 0;
                alert('submitted');
                $('.ql').remove();
                $("#quality").text(file_source[current][0])
                $("#Quality_desc").text(file_source[current][1])
                current++;
                level++;
            }
            else {
                alert('Select atleast 24 qualities');
                
            }
        }
        else if(level==1){
            if(count==24){
                count=0;
                document.getElementById("Selection_count").textContent = count + "";
                current = 0;
                alert('submitted');
                $('.ql').remove();
                $("#quality").text(file_source[current][0])
                $("#Quality_desc").text(file_source[current][1])
                current++;
                level++;
            }else {
                alert('Select only 24 qualities');    
            }
        }
        else if(level==2){
            if(count==6){
                count=0;
                document.getElementById("Selection_count").textContent = count + "";
                current = 0;
                alert('submitted');
                $('.ql').remove();
                $("#quality").text(file_source[current][0])
                $("#Quality_desc").text(file_source[current][1])
                current++;
                window.location.href="ui2.html";
            }else {
                alert('Select only 6 qualities'); 
            }
        }
    });
    /* $(document).ready(function () {
        function GetValue() {
            $(divValue).empty().remove();
            values='';
            $('.input').each(function(){
                divValue=$(document.getElementById("ql"));
            });
            $(values);=>$("#quality");
        }
    })*/
});
    $(function (){
        $("#list").sortable();
    });
       /* for( i=0;i<list_items;i++)
        { 
            const item=list_items[i];
            $(item).on('dragstart',function(e){
                console.log('dragstart',e);
                draggedItem = this;
            });
                setTimeout(function(){
                    item.style.display = 'none';
                },0);
            });

            $(item).bind('dragend',function(){
                setTimeout(function(){
                    draggedItem.style.display = 'block';
			        draggedItem = null;
                },0);
            });
            for(j=0;j<list.length;j--)
            {
                
            }
        }*/

   












