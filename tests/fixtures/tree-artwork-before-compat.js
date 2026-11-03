function treeArtwork(s){
 const roots=KEYS.map(k=>k.name);
 // All layers use precisely the same original artwork and coordinate system.
 return `<div class="phase3-art" data-ink-region="cultural-tree-art" aria-label="Cultural Identity Tree: ${s.roots} roots, ${s.trunk?'trunk':'no trunk'}, ${s.canopy} canopy examples">
 ${roots.slice(0,s.roots).map((name,i)=>`<img class="phase3-layer root-piece root-piece-${i} ${treeReveal===`root-${i}`?'tree-just-revealed':''}" src="assets/cultural%20identity%20tree.png" alt="${name} root" style="clip-path:inset(79% ${100-(i+1)*100/3}% 0 ${i*100/3}%)"><span class="phase3-root root-name-${i}" data-ink-region="root-name-${i}">${name}</span>`).join('')}
 ${s.trunk?`<img class="phase3-layer identity-trunk ${treeReveal==='trunk'?'tree-just-revealed':''}" src="assets/cultural%20identity%20tree.png" alt="Trunk connecting the cultural roots" style="clip-path:inset(43% 0 21% 0)"><strong class="phase3-trunk-label" data-ink-region="cultural-identity">CULTURAL IDENTITY</strong>`:''}
 ${CANOPY_WORDS.slice(0,s.canopy).map((word,i)=>`<img class="phase3-layer canopy-piece ${treeReveal===`canopy-${i}`?'tree-just-revealed':''}" src="assets/cultural%20identity%20tree.png" alt="Growing tree canopy" style="clip-path:inset(0 ${100-(i+1)*25}% 57% ${i*25}%)"><span class="phase3-leaf leaf-name-${i}" data-ink-region="canopy-word-${i}">${word}</span>`).join('')}
 </div>`;
}
