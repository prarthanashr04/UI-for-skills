var current = 1, count;
var level=0;
var file_source = [
    [
        'Accuracy',
        'the quality or state of being correct or precise. Eg-"we have confidence in the accuracy of the statistics"'
    ],
    [
        'Acknowledged',
        'deep love and respect. Eg-"he gave her a look of adoration"'
    ],
    [
        'Adoration',
        'recognized as being good or important. Eg-"he is an acknowledged expert in the field"'
    ],
    [
        'Activeness',
        'engaging or ready to engage in physically energetic pursuits. Eg-"although he was seventy he was still robust and active"'
    ],
    [
        'Adaptability',
        'the quality of being able to adjust to new conditions. Eg-"adaptability is an advantage in the harshly competitive global economy"'
    ],
    [
        'Adroitness',
        'cleverness or skill. Eg-" he lacks political adroitness"'
    ],
    [
        'Adventure',
        'an unusual and exciting or daring experience. Eg-"her recent adventures in Italy"'
    ],
    [
        'Affection',
        'a gentle feeling of fondness or liking . Eg-"she felt affection for the wise old lady"'
    ],
    [
        'Affluence',
        'the state of having a great deal of money; wealth.Eg-"a sign of our growing affluence"'
    ],
    [
        'Aggressive',
        'ready or likely to attack or confront; characterized by or resulting from aggression.Eg-"hes very uncooperative and aggressive"'
    ],
    [
        'Agility',
        'ability to move quickly and easily.Eg-"though he was without formal training as dancer or athlete, his physical agility was inexhaustible"'
    ],
    [
        'Alertness',
        'the quality of being alert.Walsall were indebted to the bravery and alertness of their goalkeeper'
    ],
    [
        'Altruism',
        'disinterested and selfless concern for the well-being of others.some may choose to work with vulnerable elderly people out of altruism'
    ],
    [
        'Ambition',
        'a strong desire to do or achieve something.her ambition was to become a pilot'
    ],
    [
        'Amusement',
        'the state or experience of finding something funny.we looked with amusement at our horoscopes'
    ],
    [
        'Anticipation',
        'the action of anticipating something; expectation or prediction.her eyes sparkled with anticipation'
    ],
    [
        'Appreciation',
        'recognition and enjoyment of the good qualities of someone or something.I smiled in appreciation'
    ],
    [
        'Approachable',
        'friendly and easy to talk to.managers should be approachable'
    ],
    [
        'Articulate',
        'having or showing the ability to speak fluently and coherently.an articulate account of their experiences'
    ],
    [
        'Assertiveness',
        'confident and forceful behaviour.she has difficulty standing up for herself, even when assertiveness may be warranted'
    ],
    [
        'Assurance',
        'a positive declaration intended to give confidence; a promise.he gave an assurance that work would begin on Monday'
    ],
    [
        'Attentiveness',
        'the action of paying close attention to something.half the children who ate the cereal showed no improvement in attentiveness'
    ],
    [
        'Attractiveness',
        'the quality of being pleasing or appealing to the senses.this scheme could enhance the attractiveness of the area'
    ],
    [
        'Audacity',
        ''
    ],
    [
        'Availability',
        'the quality of being able to be used or obtained.turkey producers had been losing sales because of the all-year-round availability of beef'
    ],
    [
        'Awareness',
        'knowledge or perception of a situation or fact.we need to raise public awareness of the issue'
    ],
    [
        'Awe',
        'a feeling of reverential respect mixed with fear or wonder.they gazed in awe at the small mountain of diamonds'
    ],
    [
        'Balance',
        'an even distribution of weight enabling someone or something to remain upright and steady.she lost her balance and fell'
    ],
    [
        'Beauty',
        'a combination of qualities, such as shape, colour, or form, that pleases the aesthetic senses, especially the sight.I was struck by her beauty'
    ],
    [
        'Being The Best',
        ''
    ]


];
$(document).ready(function () {
    $("#NoButton").click(function () {
        $("#quality").text(file_source[current][0])
        $("#Quality_desc").text(file_source[current][1])
        current++;
    });
});
$(document).ready(function () {
    $("#YesButton").click(function () {
        $("#quality").text(file_source[current][0])
        $("#Quality_desc").text(file_source[current][1])
        current++;
        var x = document.getElementById("Selection_count").textContent;
        count = parseInt(x);
        count++;
        document.getElementById("Selection_count").textContent = count + "";
        $("#Second_Row").append("<label class='ql' id='ql'>" + file_source[current - 2][0] + "</label>")
        file_source[current][2] = 'Yes';
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
            }else {
                alert('Select only 6 qualities'); 
            }
        }
    });

});











