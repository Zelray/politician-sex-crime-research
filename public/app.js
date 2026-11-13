const cases = {
  democrats: [
    { name:'Fred “Freddie” Richmond', tags:['pedo','monger','gay'], office:'U.S. Representative · New York', meta:'D.C. · 1978 · charge dismissed', charge:'Pleaded not guilty to soliciting a male undercover police officer for prostitution; later accounts described reported paid solicitations involving a 16-year-old youth.', outcome:'The sex-related misdemeanor was reported dismissed under a first-offender procedure after treatment. No sex-crime conviction is established by the cited sources.', note:'The exact statutory citation and separate arrest date were not located. Later descriptions vary.', source:'New York Times / House Historian', url:'https://www.nytimes.com/1978/04/07/archives/rep-richmond-enters-plea-of-not-guilty-in-sex-case-richmond-issues.html' },
    { name:'Mel Reynolds', tags:['pedo','rape','peeper'], office:'U.S. Representative · Illinois', meta:'Illinois · 1994–95 · convicted', charge:'Indicted on sex-related counts including aggravated criminal sexual abuse, criminal sexual assault, child pornography, and obstruction-related offenses.', outcome:'Jury convicted him on 12 counts. He received an aggregate five-year prison sentence; the Illinois Appellate Court affirmed. He resigned his House seat.', note:'The appellate opinion controls the final adjudicated count description.', source:'Illinois appellate opinion / House Historian', url:'https://caselaw.findlaw.com/court/il-court-of-appeals/1378801.html' },
    { name:'Anthony Weiner', tags:['pedo','peeper'], office:'Former U.S. Representative · New York', meta:'Federal · 2017 · guilty plea', charge:'Federal count for transferring obscene material to a minor after online sexual communications with a 15-year-old girl.', outcome:'Pleaded guilty and was sentenced to 21 months in federal prison plus three years of supervised release.', note:'The offense description follows the DOJ charging and sentencing releases rather than media shorthand.', source:'U.S. Department of Justice', url:'https://www.justice.gov/usao-sdny/pr/anthony-weiner-sentenced-21-months-prison-transferring-obscene-material-minor' },
    { name:'Andrew Cuomo', tags:['grope'], office:'Governor of New York', meta:'New York · 2021 · charge dismissed', charge:'Criminal complaint charged forcible touching, alleging he groped an aide at the Executive Mansion.', outcome:'Albany City Court dismissed the charge in January 2022 after the district attorney said prosecutors could not meet the burden of proof. No conviction or plea.', note:'The filing was a summons, not a documented custodial arrest. Cuomo denied the allegation.', source:'Reuters / PBS NewsHour', url:'https://www.pbs.org/newshour/politics/judge-dismisses-criminal-charge-against-andrew-cuomo' }
  ],
  republicans: [
    { name:'Donald J. Trump', tags:['rape','grope'], office:'U.S. President · 45th & 47th', meta:'New York federal court · 2023 · civil liability', charge:'Writer E. Jean Carroll’s civil suit accused him of pinning her against a dressing-room wall in a mid-1990s department-store encounter and forcibly penetrating her with his fingers.', outcome:'A federal jury found him liable for sexual abuse and defamation and awarded $5 million. Judge Lewis Kaplan later ruled that the finding meant Trump “raped” Carroll as the word is commonly understood, even though New York law’s narrow definition of rape did not fit.', note:'Civil case — no arrest, criminal charge, or criminal conviction. The Second Circuit affirmed the verdict in 2024.', source:'Washington Post / U.S. District Court', url:'https://www.washingtonpost.com/politics/2023/07/19/trump-carroll-judge-rape' },
    { name:'Robert E. “Bob” Bauman', tags:['pedo','gay'], office:'U.S. Representative · Maryland', meta:'D.C. · 1980–81 · charges dismissed', charge:'Charged with soliciting sex from a 16-year-old boy; he pleaded innocent and entered a counseling program.', outcome:'The government dropped or dismissed the charges after the court-supervised first-offender arrangement. No conviction is reported.', note:'The precise statutory citation and exact arrest date were not located in an accessible court record.', source:'Washington Post / New York Times', url:'https://www.nytimes.com/1981/04/03/us/bauman-charges-are-dismissed.html' },
    { name:'Donald E. “Buz” Lukens', tags:['pedo'], office:'U.S. Representative · Ohio', meta:'Ohio · 1989–90 · conviction affirmed', charge:'Indicted after an alleged sexual encounter with a 16-year-old girl; the adjudicated offense was contributing to the delinquency and unruliness of a minor.', outcome:'A jury convicted him. He received 30 days in jail and a $500 fine; the Ohio Court of Appeals upheld the conviction.', note:'The statutory label varied slightly across contemporary reports. The conviction is the legally established outcome.', source:'Washington Post / Ohio appellate record', url:'https://www.washingtonpost.com/archive/politics/1989/05/27/jury-convicts-rep-lukens-of-sex-with-underage-girl/a0023187-914d-4324-928b-548ab258d906/' },
    { name:'Larry Craig', tags:['gay','creeper'], office:'U.S. Senator · Idaho', meta:'Minnesota · 2007–08 · disorderly conduct plea', charge:'Arrested in an airport restroom sting concerning alleged sexual or lewd conduct. The documented charges were disorderly conduct and interference with privacy.', outcome:'Pleaded guilty to misdemeanor disorderly conduct; the interference-with-privacy charge was dismissed. He was not convicted of a sex offense.', note:'Borderline inclusion: arrest context was sex-related, but the final offense was not a sex crime. Craig denied soliciting sex.', source:'Federal court summary / Minnesota Court of Appeals', url:'https://law.justia.com/cases/minnesota/court-of-appeals/2008/opa071949-1209.html' },
    { name:'Eric Greitens', tags:['creeper'], office:'Governor of Missouri', meta:'Missouri · 2018 · indictment withdrawn', charge:'Felony invasion-of-privacy indictment over an alleged secretly taken nude or semi-nude photograph during an affair.', outcome:'The charge was dismissed before trial and a special prosecutor declined to refile because of insufficient corroborating evidence. No conviction or acquittal.', note:'This is a sex-related image/privacy charge, not a rape or assault charge. Greitens denied criminal wrongdoing.', source:'NPR / Missouri House report', url:'https://www.npr.org/2018/02/22/588122246/missouri-gov-eric-greitens-indicted-on-felony-charges-of-invasion-of-privacy' },
    { name:'Patrick Wojahn', tags:['pedo','peeper'], office:'Mayor of College Park, Maryland', meta:'Maryland · 2023 · 30-year prison term', charge:'Initially arrested on 56 counts involving possession and distribution of child-exploitative material.', outcome:'Pleaded guilty to 140 counts. Sentenced to a 30-year prison term, with the balance of a 150-year sentence stayed.', note:'The later guilty plea and sentence supersede the initial 56-count arrest shorthand.', source:'Prince George’s County Police / DC Bar report', url:'https://www.dcbar.org/ServeFile/GetDisciplinaryActionFile?fileName=PatrickLWojahn24BD069.pdf' }
  ]
};
// Canonical tag order — every chip row (cards, Doyle's section, the filter
// bar) renders in this order, so "pedo" is always first when present.
const TAG_ORDER = ['pedo','rape','grope','monger','gay','peeper','creeper'];

// Tag chips: colored descriptors on the name line, right-aligned.
// "pedo" is styled loudest (bright red) in the CSS.
function tag(t){ return `<span class="tag tag--${t}">${t}</span>`; }
function card(item, index){
  const tags = (item.tags || []).slice().sort((a,b) => TAG_ORDER.indexOf(a) - TAG_ORDER.indexOf(b));
  return `<article class="case-card" data-tags="${tags.join(',')}" data-index="${String(index+1).padStart(2,'0')}"><div class="case-card__head"><h3>${item.name}</h3><div class="case-card__tags">${tags.map(tag).join('')}</div></div><div class="case-card__meta">${item.office}<br>${item.meta}</div><div class="case-card__label">ALLEGATION / CHARGE</div><p>${item.charge}</p><div class="case-card__label">LEGAL OUTCOME</div><p class="case-card__outcome">${item.outcome}</p><p class="case-card__note">${item.note}</p><a class="source-link" href="${item.url}" target="_blank" rel="noreferrer">${item.source} →</a></article>`;
}
document.querySelector('#dem-cases').innerHTML = cases.democrats.map(card).join('');
document.querySelector('#rep-cases').innerHTML = cases.republicans.map(card).join('');

// Placeholder shown inside a party column when a filter empties it out.
document.querySelectorAll('.case-stack').forEach(stack =>
  stack.insertAdjacentHTML('beforeend', '<div class="stack-empty" hidden>NO CASES UNDER THIS TAG</div>'));

// ---------------------------------------------------------------------------
// FILTER BAR — rendered into the "THE PARTY DIVIDE" heading row.
// Click a tag: non-matching blocks fade + collapse (collapsing is what slides
// the matching cards up to the top of their column). Click the active tag
// again to clear the filter.
// ---------------------------------------------------------------------------
const bar = document.querySelector('#tag-bar');
bar.innerHTML = '<span class="tag-bar__label">FILTER</span>' + TAG_ORDER.map(t =>
  `<button type="button" class="tag tag--${t} tag-bar__btn" data-tag="${t}" aria-pressed="false">${t}</button>`).join('');

let activeTag = null;

// Collapse / expand one block (a case card, or Doyle's section).
// CSS heights of "auto" don't animate, so both directions pin an explicit
// pixel height first: collapse locks the current height then eases to 0;
// expand eases up to a measured height (plus slack for the padding/border
// animating back in) and releases to "auto" once the transition finishes.
function setBlockHidden(block, hide){
  // Reduced-motion users get no transitions — and with no transition there is
  // no transitionend event, so the maxHeight pin below would never release.
  // Skip the animation machinery entirely for them (instant show/hide).
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    block.classList.toggle('is-tag-hidden', hide);
    block.style.maxHeight = '';
    return;
  }
  if (hide){
    block.style.maxHeight = block.offsetHeight + 'px'; // lock current height
    void block.offsetHeight;                            // force reflow so the lock registers
    block.classList.add('is-tag-hidden');               // fade + zero margins/padding/borders
    block.style.maxHeight = '0px';                      // ...then collapse away
  } else {
    block.classList.remove('is-tag-hidden');
    block.style.maxHeight = (block.scrollHeight + 80) + 'px';
    block.addEventListener('transitionend', function release(e){
      if (e.propertyName !== 'max-height' || block.classList.contains('is-tag-hidden')) return;
      block.removeEventListener('transitionend', release);
      block.style.maxHeight = '';                       // back to natural auto height
    });
  }
}

function applyFilter(tag){
  activeTag = (activeTag === tag) ? null : tag; // clicking the active tag clears it

  bar.querySelectorAll('.tag-bar__btn').forEach(btn => {
    const on = btn.dataset.tag === activeTag;
    btn.classList.toggle('tag-bar__btn--active', on);
    btn.setAttribute('aria-pressed', String(on));
  });

  document.querySelectorAll('.case-card, .other-case').forEach(block => {
    const tags = (block.dataset.tags || '').split(',').filter(Boolean);
    const shouldHide = activeTag !== null && !tags.includes(activeTag);
    if (block.classList.contains('is-tag-hidden') !== shouldHide) setBlockHidden(block, shouldHide);
  });

  // While filtering, each column's counter shows its visible count, and an
  // emptied column explains itself instead of just going blank.
  document.querySelectorAll('.party-column').forEach(col => {
    const cards = [...col.querySelectorAll('.case-card')];
    const visible = cards.filter(c => !c.classList.contains('is-tag-hidden')).length;
    col.querySelector('.party-count').textContent = String(activeTag ? visible : cards.length).padStart(2,'0');
    const empty = col.querySelector('.stack-empty');
    if (empty) empty.hidden = !(activeTag && visible === 0);
  });
}

bar.addEventListener('click', e => {
  const btn = e.target.closest('.tag-bar__btn');
  if (btn) applyFilter(btn.dataset.tag);
});
