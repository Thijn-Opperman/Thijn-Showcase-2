# 📸 Hoe je jouw foto's toevoegt

## Profielfoto bovenaan de pagina

### Stap 1: Plaats je foto
- Plaats je profielfoto in de `public` folder
- Noem het bestand: `profile.jpg` (of `profile.png`, `profile.webp`)

**Voorbeeld:**
```
showcase-portfolio/
  └── public/
      └── profile.jpg  ← Hier plaats je je foto
```

### Stap 2: Let op:
- ✅ De foto wordt automatisch rond gemaakt
- ✅ De foto wordt automatisch geoptimaliseerd door Next.js
- ✅ De foto wordt automatisch in verschillende formaten geleverd voor snelle laadtijden

### Stap 3: Start de dev server
```bash
cd showcase-portfolio
npm run dev
```

### Alternatief: Andere bestandsnaam gebruiken
Als je een andere bestandsnaam wilt gebruiken, verander regel 30 in `components/hero.tsx`:
```tsx
src="/profile.jpg"  // ← Verander naar je bestandsnaam
```

---

## Foto voor de "About me" sectie

### Stap 1: Plaats je foto
- Plaats je "About me" foto in de `public` folder
- Noem het bestand: `about.jpg` (of `about.png`, `about.webp`)

### Stap 2: Update `components/about.tsx`
Vervang regels 40-42 in `components/about.tsx` met:
```tsx
<Image
  src="/about.jpg"
  alt="Thijn Opperman"
  width={500}
  height={500}
  className="w-full h-full object-cover rounded-2xl"
/>
```

---

## 💡 Tips voor de beste resultaten

1. **Bestandsformaten:**
   - Gebruik JPG voor foto's met veel kleuren
   - Gebruik PNG voor foto's met transparantie
   - Gebruik WebP voor beste compressie (aanbevolen)

2. **Foto dimensies:**
   - Profielfoto: minimaal 400x400 pixels (vierkant)
   - About foto: minimaal 600x600 pixels (vierkant)

3. **Optimale grootte:**
   - Probeer onder 500KB te blijven voor snelle laadtijden
   - Next.js zal de foto automatisch optimaliseren

4. **Profielfoto eigenschappen:**
   - Gebruik een ronde profielfoto voor beste resultaat
   - Of een foto waar je gezicht centraal staat
   - Let op goede belichting

---

## 🚀 Klaar!

Na het toevoegen van je foto's ziet je portfolio er professioneel uit met echte foto's!

