// Pexels-Bilder NUR server-side fetchen (API Key nicht im Client exponieren).
// Wird in Server Components verwendet, z. B. der Landingpage.

export type PexelsImage = {
  url: string
  photographer: string
  photographerUrl: string
  alt: string
}

/**
 * Holt das erste Querformat-Bild zu einer Suchanfrage von Pexels.
 * Gibt `null` zurück wenn kein API-Key gesetzt ist oder der Request fehlschlägt —
 * die aufrufende Seite zeigt dann einen Gradient-Fallback statt zu crashen.
 */
export async function getPexelsImage(query: string): Promise<PexelsImage | null> {
  const apiKey = process.env.PEXELS_API_KEY
  if (!apiKey) return null

  try {
    const res = await fetch(
      `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=1&orientation=landscape`,
      {
        headers: { Authorization: apiKey },
        // Tagesfrisch cachen — kein Request pro Seitenaufruf.
        next: { revalidate: 60 * 60 * 24 },
      }
    )

    if (!res.ok) return null

    const data = await res.json()
    const photo = data?.photos?.[0]
    if (!photo) return null

    return {
      url: photo.src?.large2x ?? photo.src?.large ?? photo.src?.original,
      photographer: photo.photographer ?? 'Pexels',
      photographerUrl: photo.photographer_url ?? 'https://www.pexels.com',
      alt: photo.alt || query,
    }
  } catch {
    return null
  }
}
