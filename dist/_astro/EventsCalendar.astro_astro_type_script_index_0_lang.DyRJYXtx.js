const s=[{name:"April",year:2026,startDayOfWeek:3,totalDays:30,events:[{days:[24,25,26],id:"annual-spring-camp-2026",title:"Annual Spring Camp 2026",subtitle:"3 Days in Qadisha & Cedars Valleys",dateStr:"April 24 – 26, 2026",badge:"Major Camp",badgeColor:"bg-blue-700 text-white",colorClass:"bg-blue-600 text-white font-bold ring-2 ring-blue-300",desc:"Tenting under the stars, patrol woodcraft, campfire lore, and high-altitude hiking for Kochefe and Jouwele.",location:"Qadisha Valley & Bcharre",ages:"Ages 11 – 24",duration:"3 Days"}]},{name:"May",year:2026,startDayOfWeek:5,totalDays:31,events:[{days:[5],id:"st-jean-marc-feast-day",title:"Saint Jean Marc Feast Day & 49th Anniversary",subtitle:"Parish Celebration & Official Group Parade",dateStr:"May 5, 2026",badge:"Anniversary",badgeColor:"bg-amber-600 text-white",colorClass:"bg-amber-600 text-white font-bold ring-2 ring-amber-300",desc:"Solemn parish mass, Scout Promise investitures, and group parade through the medieval streets of Byblos.",location:"Paroisse Saint Jean Marc, Byblos",ages:"All Units (Ages 4 – 24)",duration:"Full Day"},{days:[16],id:"spring-cleaning-drive",title:"Old Byblos Coastline Clean-Up",subtitle:"Scout Civic & Environmental Service",dateStr:"May 16, 2026",badge:"Civic Service",badgeColor:"bg-teal-700 text-white",colorClass:"bg-teal-600 text-white font-bold ring-2 ring-teal-300",desc:"Cleaning and preserving the historic Byblos shoreline, sorting recyclables in partnership with local civic groups.",location:"Byblos Port & Shoreline",ages:"All Units",duration:"Half Day"}]},{name:"July",year:2026,startDayOfWeek:3,totalDays:31,events:[{days:[18,19,20,21,22,23,24,25,26,27,28],id:"grand-summer-camp-2026",title:"Grand Summer Camp 2026 (Grand Camp)",subtitle:"10 Days of Autonomous Wilderness Living",dateStr:"July 18 – 28, 2026",badge:"Grand Camp",badgeColor:"bg-emerald-700 text-white",colorClass:"bg-emerald-600 text-white font-bold ring-2 ring-emerald-300",desc:"The crown jewel of the scout year. Building 100% wooden camp infrastructure, night watches, and exploration raids.",location:"Mount Lebanon High Plateau",ages:"All Branches (4 – 24)",duration:"10 Days"}]}];let l=0;s[0].events[0];const u=document.getElementById("cal-month-title"),r=document.getElementById("calendar-days-grid"),o=document.getElementById("event-spotlight-card"),b=document.getElementById("cal-prev-btn"),x=document.getElementById("cal-next-btn");function c(){const e=s[l];if(!(!e||!r||!u)){u.textContent=`${e.name} ${e.year}`,r.innerHTML="";for(let t=0;t<e.startDayOfWeek;t++){const i=document.createElement("div");i.className="py-2 text-stone-300 select-none",r.appendChild(i)}for(let t=1;t<=e.totalDays;t++){const d=(e.startDayOfWeek+t-1)%7===6,n=e.events.find(p=>p.days.includes(t)),a=document.createElement("button");a.type="button",a.className="py-2 px-1 rounded-xl relative flex flex-col items-center justify-center transition-all cursor-pointer hover:bg-stone-200/70 focus:outline-none",n?a.className+=` ${n.colorClass} shadow-sm`:d?a.className+=" text-emerald-900 font-bold bg-emerald-50 border border-emerald-200":a.className+=" text-stone-700",a.innerHTML=`<span>${t}</span>`,d&&!n&&(a.innerHTML+='<span class="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-0.5"></span>'),a.addEventListener("click",()=>{n?g(n):d&&m(t,e.name)}),r.appendChild(a)}e.events.length>0?g(e.events[0]):m(4,e.name)}}function g(e){o&&(o.innerHTML=`
      <div class="flex items-center justify-between">
        <span class="inline-block px-3 py-1 rounded-full text-xs font-bold ${e.badgeColor}">
          ${e.badge}
        </span>
        <span class="text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
          ${e.dateStr}
        </span>
      </div>

      <div>
        <h3 class="text-2xl font-black text-stone-900 tracking-tight leading-snug">
          ${e.title}
        </h3>
        <p class="text-xs font-semibold text-stone-500 mt-1">${e.subtitle}</p>
      </div>

      <p class="text-stone-600 text-sm leading-relaxed">
        ${e.desc}
      </p>

      <div class="grid grid-cols-2 gap-4 pt-4 border-t border-stone-200 text-xs">
        <div>
          <span class="text-stone-400 block font-medium">Location:</span>
          <strong class="text-stone-800">${e.location}</strong>
        </div>
        <div>
          <span class="text-stone-400 block font-medium">Duration:</span>
          <strong class="text-stone-800">${e.duration}</strong>
        </div>
      </div>

      <div class="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
        <a 
          href="/events/${e.id}" 
          class="btn-scout-gold text-xs !py-2.5 !px-5 w-full sm:w-auto text-center"
        >
          View Full Event & Portal →
        </a>
        <a 
          href="https://wa.me/96170000000?text=${encodeURIComponent(`Hello! I have a question about ${e.title}.`)}"
          target="_blank"
          rel="noopener noreferrer"
          class="text-xs font-bold text-stone-700 hover:text-stone-950 underline"
        >
          Ask on WhatsApp
        </a>
      </div>
    `)}function m(e,t){o&&(o.innerHTML=`
      <div class="flex items-center justify-between">
        <span class="inline-block px-3 py-1 rounded-full text-xs font-bold bg-emerald-700 text-white">
          Weekly Gathering
        </span>
        <span class="text-xs font-bold text-stone-600 bg-stone-100 px-2.5 py-0.5 rounded-full">
          ${t} ${e}, 2026
        </span>
      </div>

      <div>
        <h3 class="text-2xl font-black text-stone-900 tracking-tight leading-snug">
          Saturday Weekly Scout Session
        </h3>
        <p class="text-xs font-semibold text-emerald-800 mt-1">3:00 PM – 4:30 PM • Saint Jean Marc Hall</p>
      </div>

      <p class="text-stone-600 text-sm leading-relaxed">
        Regular weekly meeting for all branches: Gramiz & Zahrat (4–11), Kochefe & Mourchidet (11–16), and Jouwele & Mounjidet (16–24). New recruits are warmly welcome to drop by without paperwork!
      </p>

      <div class="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
        <a 
          href="/#meeting" 
          class="btn-scout-primary text-xs !py-2.5 !px-5 w-full sm:w-auto text-center"
        >
          Meeting Details & Map
        </a>
        <a 
          href="https://wa.me/96170000000?text=${encodeURIComponent("Hello! I would like to attend the Saturday meeting at Saint Jean Marc.")}"
          target="_blank"
          rel="noopener noreferrer"
          class="text-xs font-bold text-emerald-800 hover:text-emerald-950 underline"
        >
          Message Chef on WhatsApp →
        </a>
      </div>
    `)}b?.addEventListener("click",()=>{l=(l-1+s.length)%s.length,c()});x?.addEventListener("click",()=>{l=(l+1)%s.length,c()});c();
