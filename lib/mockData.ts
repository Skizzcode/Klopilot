export type ToiletStatus = 'vermietet' | 'frei' | 'service fällig' | 'abholen' | 'defekt'

export type Toilet = {
  id: string
  location: string
  customer: string
  status: ToiletStatus
  nextJob: string
  lastService: string
  driver: string
  address: string
  history: Array<{ time: string; event: string }>
}

export type Job = {
  id: string
  toiletId: string
  title: string
  location: string
  customer: string
  task: string
  driver: string
  status: 'offen' | 'erledigt'
  eta?: string
  time?: string
  problem?: string
}

export type Report = {
  planned: number
  done: number
  open: number
  problem: number
  doneJobs: Array<{ id: string; title: string; driver: string; time: string }>
  issue: { id: string; note: string; time: string }
}

export const overviewStats = {
  rented: 63,
  today: 12,
  pickups: 3,
  issues: 1
}

export const toilets: Toilet[] = [
  {
    id: 'WC-042',
    location: 'Baustelle Müller',
    customer: 'Baustelle Müller GmbH',
    status: 'vermietet',
    nextJob: 'Reinigung + Leerung heute',
    lastService: '10:43 Foto-Nachweis',
    driver: 'Mehmet',
    address: 'Annaberger Str. 120, Chemnitz',
    history: [
      { time: '08:12', event: 'geliefert' },
      { time: '10:42', event: 'gereinigt' },
      { time: '10:43', event: 'Foto-Nachweis' }
    ]
  },
  {
    id: 'WC-088',
    location: 'Event Leipzig',
    customer: 'Eventservice Leipzig',
    status: 'abholen',
    nextJob: 'Abholung 16:00',
    lastService: '09:05 Service bestätigt',
    driver: 'Thomas',
    address: 'Messeallee 5, Leipzig',
    history: [
      { time: '09:05', event: 'Service bestätigt' },
      { time: '11:20', event: 'Aufstellung kontrolliert' }
    ]
  },
  {
    id: 'WC-017',
    location: 'Lager Chemnitz',
    customer: 'Eigenbestand',
    status: 'frei',
    nextJob: 'Lieferung geplant',
    lastService: '14:20 geprüft',
    driver: 'Mehmet',
    address: 'Industriestr. 44, Chemnitz',
    history: [{ time: '14:20', event: 'geprüft' }]
  },
  {
    id: 'WC-031',
    location: 'Baustelle Zwickau',
    customer: 'Handwerk Zwickau',
    status: 'defekt',
    nextJob: 'defekt prüfen',
    lastService: '08:50 gemeldet',
    driver: 'Thomas',
    address: 'Gustav-Adolf-Str. 7, Zwickau',
    history: [{ time: '08:50', event: 'Türgriff locker' }]
  },
  {
    id: 'WC-064',
    location: 'Festplatz Döbeln',
    customer: 'Festservice Mittelsachsen',
    status: 'vermietet',
    nextJob: 'Reinigung morgen',
    lastService: '08:00 gereinigt',
    driver: 'Mehmet',
    address: 'Festplatz, Döbeln',
    history: [{ time: '08:00', event: 'gereinigt' }]
  },
  {
    id: 'WC-079',
    location: 'Kita Sonnenweg',
    customer: 'Komplett Sanitär',
    status: 'service fällig',
    nextJob: 'Kontrolle heute',
    lastService: '07:15 geprüft',
    driver: 'Thomas',
    address: 'Sonnenweg 13, Chemnitz',
    history: [{ time: '07:15', event: 'Basis kontrolliert' }]
  },
  {
    id: 'WC-112',
    location: 'Sporthalle Aue',
    customer: 'Sport & Event',
    status: 'vermietet',
    nextJob: 'Reinigung morgen',
    lastService: '12:10 geleert',
    driver: 'Mehmet',
    address: 'Stadionring 8, Aue',
    history: [{ time: '12:10', event: 'geleert' }]
  },
  {
    id: 'WC-133',
    location: 'Bauernhof Sächsisch',
    customer: 'Regional Vermietung',
    status: 'vermietet',
    nextJob: 'Kontrolle heute',
    lastService: '09:50 bewertet',
    driver: 'Thomas',
    address: 'Hauptstr. 32, Penig',
    history: [{ time: '09:50', event: 'Status geprüft' }]
  }
]

export const jobs: Job[] = [
  {
    id: 'WC-042',
    toiletId: 'WC-042',
    title: 'WC-042 · Baustelle Müller',
    location: 'Baustelle Müller',
    customer: 'Baustelle Müller GmbH',
    task: 'reinigen + leeren',
    driver: 'Mehmet',
    status: 'offen'
  },
  {
    id: 'WC-088',
    toiletId: 'WC-088',
    title: 'WC-088 · Event Leipzig',
    location: 'Event Leipzig',
    customer: 'Eventservice Leipzig',
    task: 'abholen',
    driver: 'Thomas',
    status: 'offen',
    eta: '16:00'
  },
  {
    id: 'WC-017',
    toiletId: 'WC-017',
    title: 'WC-017 · Lager',
    location: 'Lager Chemnitz',
    customer: 'Eigenbestand',
    task: 'liefern',
    driver: 'Mehmet',
    status: 'erledigt',
    time: '09:30'
  },
  {
    id: 'WC-031',
    toiletId: 'WC-031',
    title: 'WC-031 · Baustelle Zwickau',
    location: 'Baustelle Zwickau',
    customer: 'Handwerk Zwickau',
    task: 'defekt prüfen',
    driver: 'Thomas',
    status: 'offen',
    problem: 'Türgriff locker'
  }
]

export const report: Report = {
  planned: 12,
  done: 9,
  open: 2,
  problem: 1,
  doneJobs: [
    { id: 'WC-017', title: 'Lager – liefern', driver: 'Mehmet', time: '09:30' },
    { id: 'WC-042', title: 'Baustelle Müller – reinigen', driver: 'Mehmet', time: '10:42' },
    { id: 'WC-064', title: 'Festplatz Döbeln – prüfen', driver: 'Mehmet', time: '11:50' },
    { id: 'WC-112', title: 'Sporthalle Aue – leeren', driver: 'Mehmet', time: '12:10' }
  ],
  issue: { id: 'WC-031', note: 'Türgriff locker · Foto vorhanden', time: '10:42' }
}
