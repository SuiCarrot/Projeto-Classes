const btn = document.querySelector("#botao-proximo");
const classe = document.querySelector("#classe");
const descricao = document.querySelector("#descricao");
const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");

btn.addEventListener("click", function () { 
  if(btn.value == "first"){
    classe.innerText = "Man-at-arms";
    descricao.innerText = "An old, battle-scarred veteran, the Man-at-Arms has seen enough war and bloodshed to last more than a dozen lifetimes. While he can no longer swing his great mace with the force he once could, you should not stand where he swings his mighty weapon. However it is not offense, but his defense, that makes the Man-at-Arms such a vital member of any team. His ability to read the enemy's movements allows him to draw fire to himself to defend his allies and then retaliate with surprising force."  
    img1.setAttribute('src', '/media/images/darkest-dungeon/man-at-arms-left.png');
    img2.setAttribute('src', '/media/images/darkest-dungeon/man-at-arms-right.png');
    btn.setAttribute('value', 'second')
  }
  else if(btn.value == "second"){
    classe.innerText = "Crusader";
    descricao.innerText = "Every cause needs a champion, a hero to rally otherwise common men to a righteous cause and lead them to victory. The Crusader is that champion. With holy blade in hand he smites the wicked and sends them back to the darkness from whence they crept. While his armor restricts his movement it affords him great protection, allowing him to stand in the frontlines to take the blows that his weaker comrades cannot."  
    img1.setAttribute('src', '/media/images/darkest-dungeon/crusader-left.png');
    img2.setAttribute('src', '/media/images/darkest-dungeon/crusader-right.png');
    btn.setAttribute('value', 'third')
  }
  else if(btn.value == "third"){
    classe.innerText = "Highwayman";
    descricao.innerText = "A bandit seeking redemption on an old road, the Highwayman is one of the fastest classes in the game and is able to dish out a lot of damage quickly. He can be placed in both the front ranks and rend enemies with his short sword, or he can pursue enemies from the back with his trusty pistol. He has a lower HP value than most classes, but makes up for this with high evasion."  
    img1.setAttribute('src', '/media/images/darkest-dungeon/highwayman-left.png');
    img2.setAttribute('src', '/media/images/darkest-dungeon/highwayman-right.png');
    btn.setAttribute('value', 'fourth')
  }
  else if(btn.value == "fourth"){
    classe.innerText = "Plague Doctor";
    descricao.innerText = "A doctor, researcher and alchemist who prefers to hang back, eating away at her foes with stacking damage-over-time abilities like toxic clouds & plague-filled grenades. She is equally effective in a support role, blinding and confusing foes while enhancing a party's survival with damage-increasing tonics, and remedies for bleed and blight effects."  
    img1.setAttribute('src', '/media/images/darkest-dungeon/plague-doctor-left.png');
    img2.setAttribute('src', '/media/images/darkest-dungeon/plague-doctor-right.png');
    btn.setAttribute('value', 'fifth')
  }
  else if(btn.value == "fifth"){
    classe.innerText = "Bounty Hunter";
    descricao.innerText = "Sinister and precise, the Bounty Hunter specializes in targeting a single foe to deliver its head for the reward. He has found that simply striking before thinking is an ineffective way to kill, so he has taught himself many ways to take advantage of his foe's vulnerabilities.If they wear armor, he can find the weak points in it. If they are reeling from a hit, he'll make a surprise attack to strike it down."  
    img1.setAttribute('src', '/media/images/darkest-dungeon/bonty-hunter-left.png');
    img2.setAttribute('src', '/media/images/darkest-dungeon/bonty-hunter-right.png');
    btn.setAttribute('value', 'sixth')
  }
  else if(btn.value == "sixth"){
    classe.innerText = "Leper";
    descricao.innerText = "Struggle, and futility — all one's days are a constant toil to shelter life's ember through one more night. The Leper not only knows but embraces such solemnity. Tortured existence has taught him to count not on the care of others. He has learned to channel his energy inward, a kingdom within one man. His power can neither serve nor comfort others; but, drawing on it, he can gain strength others can but dream of, or the endurance to bear what no other could. And when his massive blade falls, death's call rings loud to all caught in its thunderous arc. However, such force falls not nimbly, and foes may lightly evade their execution."  
    img1.setAttribute('src', '/media/images/darkest-dungeon/leper-left.png');
    img2.setAttribute('src', '/media/images/darkest-dungeon/leper-right.png');
    btn.setAttribute('value', 'seventh')
  }
  else if(btn.value == "seventh"){
    classe.innerText = "Jester";
    descricao.innerText = "In the darkest depths of these twisted lands few things are as welcomed as a good laugh, a merry song, and razor sharp blade. The Jester brings all of these in spades. Armed with a sickle and lute, this maniacal minstrel is a versatile class that has several tricks up his sleeves. As an entertainer, he can make a stressful night of camping turn into a night of merriment and wit. The melodious riffs of his lute will make any party member's mind quiet as he encourages them to strike quickly and precisely like a tiger."  
    img1.setAttribute('src', '/media/images/darkest-dungeon/jester-left.png');
    img2.setAttribute('src', '/media/images/darkest-dungeon/jester-right.png');
    btn.setAttribute('value', 'first')
  }
});