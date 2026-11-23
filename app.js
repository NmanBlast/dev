'use strict';
const en = {
 skip:'Skip to content',navWork:'Projects',navServices:'Services',navProcess:'My process',talk:"Let's talk",available:'Open for commissions',hero1:'Your server.',hero2:'Your rules.',hero3:'Custom code.',heroDesc:'Bring your next Minecraft Java idea to life. Plugins, configuration, and integrations that give your server a personality of its own.',quote:'Tell me your idea',viewWork:'Explore projects',heroFoot:'Behind the code, a server owner.',stackLabel:'AN ECOSYSTEM I WORK WITH',workEyebrow:'FROM SERVER TO PORTFOLIO',workTitle:'Ideas taking shape.',workIntro:'VoidTime is my own project, where I work with mechanics, plugins, and custom content.',ownProject:'PERSONAL PROJECT',project1:'A survival server with its own identity',project1Desc:'Configuration, economy, permissions, and connected systems.',rewardLabel:'REWARDS & PROGRESSION',interfaceConcept:'Interface concept',gameplayLabel:'CUSTOM GAMEPLAY',project2:'More reasons to come back',project2Desc:'Reward and progression mechanics in VoidTime.',workNote:'Experience from my own project, VoidTime. Images are AI-generated concept art, not server screenshots.',servicesEyebrow:'HOW I CAN HELP',servicesTitle:'One idea. Many possibilities.',servicesIntro:'From a specific configuration to a small mechanic made for your community.',service1:'Custom plugins',service1Desc:'Commands, rewards, and small custom gameplay mechanics. We define the features before getting started.',tagCustom:'YOUR IDEA, YOUR MECHANIC',service2:'Configuration & integration',service2Desc:'Permissions, ranks, menus, and economy. I connect your plugins into one coherent experience.',service3:'Troubleshooting & fixes',service3Desc:'Console errors, conflicts, and configuration issues. We identify the problem first, then agree on a solution.',tagTrouble:'TROUBLESHOOTING',fairPrice:'Fixed pricing based on scope.',fairDesc:'Features, timeline, and deliverables agreed before work begins.',askQuote:'Request a quote',aboutEyebrow:"HI, I'M NMANBLAST",aboutTitle:"I'm on the other side of the console, too.",aboutDesc:'I run VoidTime, my own Minecraft server. I work on the configuration, integrations, and mechanics behind its custom survival experience.',aboutDesc2:'That experience helps me understand your idea from the perspective of someone who has to launch it and maintain it.',location:'Tenerife, Spain · Working remotely',processEyebrow:'HOW WE WORK TOGETHER',step1:'Tell me your idea',step1Desc:'Your version, plugins, and what you want to achieve. We review what you need.',step2:'Agree on the project',step2Desc:'Specific features, budget, and timeline. A clear scope from the beginning.',step3:'Development & testing',step3Desc:'I prepare the solution and we check it against the agreed requirements.',step4:'Delivery & setup',step4Desc:'You receive the files and the instructions needed to use them.',faqEyebrow:'BEFORE YOU REACH OUT',faqTitle:'A few common questions.',faq1:'How much does a project cost?',faq1Desc:'It depends on the features, Minecraft version, and integrations. Tell me what you need and I will prepare a quote with a defined scope.',faq2:'Can you work with my current server?',faq2Desc:'Yes, we can review your existing setup. I will need the version and plugin list to assess compatibility and the work involved.',faq3:'Are paid plugins included?',faq3Desc:'Third-party plugin and asset licenses are agreed separately. If the project needs them, you will need the appropriate licenses.',contactEyebrow:'YOUR NEXT PROJECT STARTS HERE',contact1:'What shall',contact2:'we build?',contactDesc:"Let's talk on Discord. Add me as NmanBlast and tell me what your server needs.",discordUser:'DISCORD USERNAME',copy:'Copy',openDiscord:'Open Discord',briefTitle:'Prepare your enquiry',briefDesc:'Create a message to copy and send to me on Discord.',formService:'What do you need?',option1:'A custom plugin',option2:'Configuration & integration',option3:'Help fixing a problem',option4:'Another idea',formVersion:'Minecraft version',versionPlaceholder:'E.g. Paper 1.21.8',formIdea:'Tell me your idea',ideaPlaceholder:'What should it do? Which plugins do you use?',prepare:'Prepare message',privacy:'This form does not send or store your data.',readyMessage:'Your message for Discord',copyMessage:'Copy message',footer:'For people building something of their own.',unofficial:'Independent service. Not affiliated with Mojang or Microsoft.',projectNotice:'An example of my work on VoidTime. Scope and compatibility are reviewed separately for each commission.',similar:'I want something similar'
};
const es = {};
document.querySelectorAll('[data-i18n]').forEach(el => es[el.dataset.i18n] = el.textContent);
document.querySelectorAll('[data-placeholder]').forEach(el => es[el.dataset.placeholder] = el.placeholder);
let language = 'es';
let activeProject = null;
const details = {
 es:{survival:{title:'VoidTime: survival custom',description:'Mi propio servidor es el punto de partida de mi experiencia. Trabajo con los plugins y sistemas que dan forma a la experiencia de la comunidad.',items:['Configuración del servidor sobre Paper/Purpur.','Permisos y rangos con LuckPerms.','Economía e integración con Vault.','Contenido custom con MythicMobs e ItemsAdder.']},gameplay:{title:'Recompensas y progresión',description:'En VoidTime he trabajado con sistemas de niveles, recompensas y mecánicas personalizadas para el survival.',items:['Progresión y recompensas adaptadas al servidor.','Comandos y permisos para las distintas funciones.','Integración entre las mecánicas y los plugins existentes.','Configuración y ajustes según las necesidades del proyecto.']}},
 en:{survival:{title:'VoidTime: custom survival',description:'My own server is where my hands-on experience starts. I work with the plugins and systems that shape the community experience.',items:['Server configuration on Paper/Purpur.','Permissions and ranks with LuckPerms.','Economy and Vault integration.','Custom content with MythicMobs and ItemsAdder.']},gameplay:{title:'Rewards & progression',description:'In VoidTime I have worked with leveling systems, rewards, and custom survival mechanics.',items:['Progression and rewards tailored to the server.','Commands and permissions for individual features.','Integration between mechanics and existing plugins.','Configuration and adjustments based on project needs.']}}
};
function translate(lang){
 language = lang; const dict=lang==='en'?en:es; document.documentElement.lang=lang;
 document.title=lang==='en'?'NmanBlast — Minecraft Java Development':'NmanBlast — Desarrollo Minecraft Java';
 document.querySelector('meta[name="description"]').content=lang==='en'?'NmanBlast: Minecraft Java development and configuration. Custom plugins, integrations, and troubleshooting. Contact on Discord.':'NmanBlast: desarrollo y configuración de Minecraft Java. Plugins, integraciones y soluciones para tu servidor. Contacto por Discord.';
 document.querySelectorAll('[data-i18n]').forEach(el=>{if(dict[el.dataset.i18n])el.textContent=dict[el.dataset.i18n]});
 document.querySelectorAll('[data-placeholder]').forEach(el=>el.placeholder=dict[el.dataset.placeholder]);
 document.querySelectorAll('[data-lang]').forEach(el=>el.setAttribute('aria-pressed',String(el.dataset.lang===lang)));
 document.querySelector('.dialog-close').setAttribute('aria-label',lang==='en'?'Close':'Cerrar');
 document.querySelector('.header nav').setAttribute('aria-label',lang==='en'?'Main navigation':'Principal');
 document.querySelector('#hero-scene').alt=lang==='en'?'AI concept art of a violet portal on a floating voxel island':'Arte conceptual de un portal violeta en una isla flotante de bloques, creado con IA';
 document.querySelector('#work-scene').alt=lang==='en'?'AI concept art of a block-built village with a violet portal':'Arte conceptual de un pueblo de bloques con un portal violeta, creado con IA';
 document.querySelector('#rewards-scene').alt=lang==='en'?'AI concept art of a reward chest with a violet crystal':'Arte conceptual de un cofre de recompensas con un cristal violeta, creado con IA';
 if(activeProject)renderProject(activeProject);
 if(!document.getElementById('message-result').hidden)prepareBrief();
 try{localStorage.setItem('nmanblast-language',lang)}catch{}
}
document.querySelectorAll('[data-lang]').forEach(button=>button.addEventListener('click',()=>translate(button.dataset.lang)));
try{const saved=localStorage.getItem('nmanblast-language');if(saved==='en')translate('en')}catch{}
const toast = document.querySelector('#toast');let toastTimer;
function notify(message){clearTimeout(toastTimer);toast.textContent=message;toast.classList.add('visible');toastTimer=setTimeout(()=>toast.classList.remove('visible'),3200)}
async function copyText(value,fallbackElement){
 try{await navigator.clipboard.writeText(value);notify(language==='es'?'Copiado. Ya puedes pegarlo en Discord.':'Copied. You can paste it in Discord.');return true}
 catch{const temporary=!fallbackElement;const field=fallbackElement||document.createElement('textarea');if(temporary){field.value=value;field.style.position='fixed';field.style.opacity='0';document.body.append(field)}field.focus();field.select();let copied=false;try{copied=document.execCommand('copy')}catch{}if(temporary)field.remove();notify(copied?(language==='es'?'Copiado al portapapeles.':'Copied to clipboard.'):(language==='es'?'Copia el texto manualmente: '+(temporary?value:'selecciona el mensaje.'):'Copy the text manually: '+(temporary?value:'select the message.')));return copied}
}
document.querySelector('#copy-discord').addEventListener('click',()=>copyText('NmanBlast'));
function prepareBrief(){
 const service=document.querySelector('#service').selectedOptions[0].textContent;
 const version=document.querySelector('#version').value.trim(); const idea=document.querySelector('#idea').value.trim();
 const message=language==='es'?`¡Hola NmanBlast! Quería pedirte presupuesto para mi servidor.\n\nServicio: ${service}\nVersión: ${version}\n\nMi idea:\n${idea}`:`Hi NmanBlast! I'd like a quote for my server.\n\nService: ${service}\nVersion: ${version}\n\nMy idea:\n${idea}`;
 document.querySelector('#brief-output').value=message;document.querySelector('#message-result').hidden=false;
}
document.querySelector('#brief-form').addEventListener('submit',event=>{event.preventDefault();const version=document.querySelector('#version'),idea=document.querySelector('#idea');if(!version.value.trim()||!idea.value.trim()){notify(language==='es'?'Completa la versión y tu idea.':'Enter your version and idea.');return}prepareBrief();document.querySelector('#brief-output').focus();notify(language==='es'?'Mensaje preparado. Cópialo y envíamelo por Discord.':'Message ready. Copy it and send it on Discord.')});
document.querySelector('#copy-brief').addEventListener('click',()=>copyText(document.querySelector('#brief-output').value,document.querySelector('#brief-output')));
const dialog=document.querySelector('#project-dialog');
function renderProject(key){
 const item=details[language][key];
 document.querySelector('#dialog-title').textContent=item.title;
 document.querySelector('#dialog-description').textContent=item.description;
 document.querySelector('#dialog-list').replaceChildren(...item.items.map(text=>{const li=document.createElement('li');li.textContent=text;return li}));
 const image=document.querySelector('#dialog-image');
 const original=document.querySelector(key==='survival'?'#work-scene':'#rewards-scene');
 image.src=key==='survival'?'assets/survival-world-960.webp':'assets/rewards-crystal-960.webp';
 image.alt=original.alt;
 document.querySelector('.dialog-art').hidden=false;
}
document.querySelectorAll('[data-project]').forEach(button=>button.addEventListener('click',()=>{activeProject=button.dataset.project;renderProject(activeProject);dialog.showModal()}));
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
document.querySelector('#dialog-contact').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const b=dialog.getBoundingClientRect();if(event.clientX<b.left||event.clientX>b.right||event.clientY<b.top||event.clientY>b.bottom)dialog.close()}});
dialog.addEventListener('close',()=>activeProject=null);

