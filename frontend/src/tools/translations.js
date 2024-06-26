export function getText(key, isCzech) {
    return isCzech ? czech[key] : english[key] ?? "";
}

export function getPositionTranslation(key) {
    let functions = {
        "Vedoucí sportovní sekce": 'Head of sports section',
        "Trenér fitcentra Silicon Gym": 'Silicon Gym personal trainer',
        "Organizátor SHOW Strongestman": 'SHOW Strongestman organisator',
        "Vedoucí správce fitcentra Silicon Gym": 'Head admin of Silicon Gym',
        "Koordinátor blokových posiloven": 'Head admin of block gyms',
        "Správce Blokové posilovny B3": 'Admin of B3 block gym',
        "Správce Blokové posilovny B4": 'Admin of B4 block gym',
        "Správce Blokové posilovny B5": 'Admin of B5 block gym',
        "Správce Blokové posilovny B6": 'Admin of B6 block gym',
        "Správce Blokové posilovny B7": 'Admin of B7 block gym',
        "Správce Blokové posilovny B8": 'Admin of B8 block gym',
        "Správce Blokové posilovny B9": 'Admin of B9 block gym',
        "Správce Blokové posilovny B10": 'Admin of B10 block gym',
        "Správce Blokové posilovny B11": 'Admin of B11 block gym',
        "Zástupce vedoucího fitcentra Silicon Gym": 'Deputy head admin of Silicon Gym',
        "Zástupce koordinátora blokových posiloven": 'Deputy head admin of block gyms',
        "Správce boulderu B2": 'Boulder admin',
        "Vedoucí cvičitelů a masérů fitcentra Silicon Gym": 'Head of Silicon Gym instructors and masseurs',
        "Správce fitcentra Silicon Gym": 'Silicon Gym admin',
        "IT technik sportovní sekce": 'Sport section IT specialist',
        "Správce hostovských karet": 'Guest cards admin',
        "Cvičitel fitcentra Silicon Gym": 'Silicon gym group class instructor',
        "Údržbář fitcentra Silicon Gym": 'Repairman of Silicon Gym',
        "Masér fitcentra Silicon Gym": 'Silicon gym massage therapist',
    }
    return functions[key] ?? key;
}

const czech = {
    'shlogo': 'logo silicon hillu sportové sekce',
    'news': 'Aktuality',
    'gyms': 'Fitka',
    'contacts': 'Kontakty',
    'reservations': 'Rezervace',
    'Wiki': 'Wiki',
    'wiki': 'wiki',
    'czFlag': 'Ikonka české vlajky pro výběr češtiny',
    'enFlag': 'Ikonka anglické vlajky pro výběr angličtiny',
    'fbPic': 'Obrázek z facebook postu',
    'showMore': 'Ukázat víc',
    'newsError': 'Nastala chyba při načítání aktualit. Zkuste to znovu později.',
    'mainDesc': 'Sportovní sekce studentského klubu Silicon hill se skládá primárně z posiloven, do kterých zařazujeme taky boulder. Sekce pořádá během semestrů několik akcí, největší z nich je soutěž ',
    'mainDesc2': '. Ta je součástí, každoročního festivalu ',
    'mainDesc3': ' a je otevřená i pro veřejnost. Posilovny jsou určeny jen pro studenty bydlící na Strahovských kolejích a jakékoliv studenty a zaměstnance ČVUT. Víc info najdete na naší ',
    'desc': 'Popis',
    'virtualTour': 'Virtuální prohlídka',
    'gal': 'Galerie',
    'view': 'Náhled',
    'partners': 'Partneři',
    'sgDesc': 'Silicon Gym je komplexní fitcentrum, ve kterém si přijdou na své kulturisti, vzpěrači, trojbojaři a další výkonnostní sportovci stejně tak jako ti, kteří si chtějí jen tak "dát do těla" či zapracovat na své postavě. Kdybys neměl s kým jít cvičit, můžeš se s někým dohodnout přes naši skupinu na',
    'sgDesc2': 'K tomu všemu se ve fitku schází dobrá parta lidí, která zpravidla tvoří přátelskou a motivující atmosféru, do které se budeš každý den těšit. Celý prostor Silicon Gymu má na starost tým správců, na které se můžeš kdykoliv obrátit. Poznáš je snadno podle týmového oblečení. ',
    'sgDesc3': 'Pokud radši makáš ve skupině než sám, podívej se na naši nabídku skupinových lekcí v rezervačním systému, určitě si vybereš. Pro individuální pomoc s tréninkem nebo stravováním můžeš využít služeb osobních trenérů, kteří ve fitku působí.',
    'sgHours': '6.00 - 23.00 (poslední vstup 22:30).',
    'here': 'tady',
    'moreInfo': 'Víc info najdeš na',
    'sgView1': 'Náhled to silicon gymu na střed místnosti',
    'sgView2': 'Náhled do silicon gymu na kardiozónu a dřepy',
    'sgView3': 'Náhled do silicon gymu na část s jednoručkama',
    'suz': 'Logo správy učelových zařízeni ČVUT.',
    'tso': 'Logo trenérske školy olympia',
    'stanmark': 'Logo firmy stanmark',
    'vasConstruct': 'Logo firmy Vas construct.',
    'workout': 'Logo eshopu workout eu',
    'shsm': 'Logo silicon hill strongest man soutěže',
    'boulderDesc': 'Stěna se nachází v suterénu bloku 2 strahovských kolejí.',
    'opHours': 'Provozní doba',
    'boulderHours': '6.00 - 22.00',
    'bGyms': 'Blokové posilovny',
    'bGymsDesc': 'Blokové posilovny se nachází v suterénu bloku strahovských kolejí s výjimkou Bloku 11, kde je posilovna v 4.-5. mezipatře. Na bloku 1, 2 a 12 se bloková posilovna nenachází.',
    'bGymsHours': '7.00 - 23.00 (poslední vstup 22:30).',
    'bGymsView': 'Náhled do posilovny na bloku ',
    'contactMails': 'Kontaktní maily:',
    'imgSG2': 'Benchovací lavice',
    'imgSG3': 'Platforma pro silové sporty',
    'imgSG4': 'Stroje pro izolační cviky',
    'imgSG5': 'Malý sál',
    'imgSG6': 'Kardio zóna',
    'imgSG7': 'Dřepovací stojany a legpress',
    'imgSG8': 'Kladky',
    'imgSG9': 'Jednoručky',
    'imgSG10': 'Sál na skupinové lekce',
    'imgB3': 'Blok 3',
    'imgB4': 'Blok 4',
    'imgB5': 'Blok 5',
    'imgB6': 'Blok 6',
    'imgB7': 'Blok 7',
    'imgB8': 'Blok 8',
    'imgB9': 'Blok 9',
    'imgB10': 'Blok 10',
    'imgB11': 'Blok 11',
    'getContactsError': 'Nastalo k chybě při načítaní kontaktů. Zkuste to prosím později.',
    'putContactsSuccess': 'Kontakty byly uloženy.',
    'putContacts403': 'Nebylo možné potvrdit autorizaci přístupu. Přihlašte se znova.',
    'putContactsError': 'Nastalo k chybě při ukládaní kontaktů. Zkuste to prosím později.',
    'contactPhoto': 'Fotka kontaktu',
    'name': 'Jméno',
    'password': 'Heslo',
    'logToEdit': 'Přihlaš se pro editaci',
    'wongCredentials': 'Špatné jméno nebo heslo',
    'cancel': 'Zrušit',
    'log': 'Přihlásit',
    'save': 'Uložit',
    'photoUpload': 'Fotografie byla nahrána na server úspěšne.',
    'photoUploadError': 'Stala se chyba při nahrávání fotografie na server, zkuste to později znovu.',
    'photoTooBig': 'Maximální dovolená velikost fotografie je 400KB.',
    'oldPhotoDeleted': 'Stará fotka byla smazána',
    'oldPhotoNotDeleted': 'Nepodařilo se smazat starou fotku.',
    'contactsEditable': 'Editační mód',
    'todo': 'Připravuje se',
    'management': "Vedení",
    'masseurs': 'Maséři',
    'instructors': "Cvičitelé",
    'trainers': "Trenéři",
    'siliconGymAdmins': "Správci Silicon Gymu",
    'blockGymsAdmins': "Správci blokových posiloven",
}

const english = {
    'shlogo': 'logo of silicon hill sport section',
    'news': 'News',
    'gyms': 'Gyms',
    'contacts': 'Contacts',
    'reservations': 'Reservations',
    'Wiki': 'Wiki',
    'wiki': 'wiki',
    'czFlag': 'Czech language selection icon',
    'enFlag': 'English language selection icon',
    'fbPic': 'Facebook post picture',
    'showMore': 'Show more',
    'newsError': 'There was an error while loading news, Try again later.',
    'desc': 'Description',
    'mainDesc': 'The sport section of the students’ organization Silicon Hill is primarily made up of gyms, among which we also include boulder. The section holds several events during semesters from which the biggest one is ',
    'mainDesc2': '. It is a part of a yearly festival ',
    'mainDesc3': ' and moreover open to public. The gyms are only available for students living in Strahov dormitories and all students and employees of CTU. You can find more info on our ',
    'virtualTour': 'Virtual Tour',
    'gal': 'Gallery',
    'view': 'View',
    'partners': 'Partners',
    'sgDesc': 'Silicon Gym is a facility, where bodybuilders, strength and endurance athletes can all find what\'s theirs. Equally those who just want to crush the workout or just want to get in shape. If you don\'t have anybody to workout with, you can try find somebody in our group on',
    'sgDesc2': 'What\'s special about the gym is that the people who train there always create a friendly and motivating vibe, which you would hardly find in a typical commercial gym. Since the gym belongs to a student\'s organisation, there is a group of admins (volunteers) who take care of the facility. You\'ll recognize them by their clothing.',
    'sgDesc3': 'If you prefer working out in a group, go have a look at the reservation system, where you can find group classes that are currently running. If you need a help with a training or a nutritional plan, one of our coaches will gladly help you put it together.',
    'sgHours': '6.00 - 23.00 (last access 22:30).',
    'here': 'here',
    'moreInfo': 'You will find more info',
    'sgView1': 'View into the middle of Silicon Gym',
    'sgView2': 'View into the Silicon Gym\'s cardio zone and squats',
    'sgView3': 'View into the dumbbell section of Silicon gym',
    'suz': 'The Service Facilities Administration of the CTU logo',
    'tso': 'Trainer\'s school Olympia logo',
    'stanmark': 'Stanmark comapny logo',
    'vasConstruct': 'Vas construct company logo',
    'workout': 'Workout eu eshop logo',
    'shsm': 'Silicon Hill Strongest Man competition logo',
    'boulderDesc': 'The wall can be found in the basement of the block 2 of Strahov dormitory.',
    'opHours': 'Opening hours',
    'boulderHours': '6.00 - 22.00',
    'bGyms': 'Block gyms',
    'bGymsDesc': 'Block gyms can be found in the basement of the block of Strahov dormitories except Block 11, where the gym is between 4. and 5. floor. There are no gyms on block 1, 2 and 12.',
    'bGymsHours': '7.00 - 23.00 (last access 22:30).',
    'bGymsView': 'The view to bloack gym on block ',
    'contactMails': 'Contact e-mails:',
    'imgSG2': 'Bench zone',
    'imgSG3': 'Platform for strength sports',
    'imgSG4': 'Machines for isolation exercises',
    'imgSG5': 'Small aerobic room',
    'imgSG6': 'Cardio zone',
    'imgSG7': 'Squat racks and legpress',
    'imgSG8': 'Cables',
    'imgSG9': 'Dumbbells',
    'imgSG10': 'Room for group lessons',
    'imgB3': 'Block 3',
    'imgB4': 'Block 4',
    'imgB5': 'Block 5',
    'imgB6': 'Block 6',
    'imgB7': 'Block 7',
    'imgB8': 'Block 8',
    'imgB9': 'Block 9',
    'imgB10': 'Block 10',
    'imgB11': 'Block 11',
    'getContactsError': 'There was an error while loading contacts, please try again later.',
    'putContactsSuccess': 'Contacts saved successfully.',
    'putContacts403': 'Could not confirm authorization. Please log in again.',
    'putContactsError': 'There was an error while saving contacts, please try again later.',
    'contactPhoto': 'The photo of the contact',
    'password': 'Password',
    'logToEdit': 'Log in to edit',
    'wongCredentials': 'Wrong name or password',
    'cancel': 'Cancel',
    'log': 'Log in',
    'save': 'Save',
    'photoUpload': 'The photo was uploaded on the server successfully.',
    'photoUploadError': 'There was an error while uploading the photo on the server. Try again later.',
    'photoTooBig': 'Maximum size of the photo is 400KB.',
    'oldPhotoDeleted': 'Old photo deleted.',
    'oldPhotoNotDeleted': 'Could not delete the old photo.',
    'contactsEditable': 'Edit mode',
    'todo': 'Under construction',
    'management': 'Management',
    'masseurs': 'Masseurs',
    'instructors': 'Group lesson instructors',
    'trainers': 'Personal trainers',
    'siliconGymAdmins': 'Admins of silicon gym',
    'blockGymsAdmins': 'Admins of block gyms',
}


