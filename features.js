// One entry per functionality. To add a feature: render its frames into img/<id>/ and append an object here.
// Frame: { state: min|col|exp|det|full|sys, img, title?, spec, via?, page?, from? }. "via" draws an arrow with that trigger before the frame; without it, frames sit side by side. "from" reads the image from another feature's folder.
// "path" (optional, shown first): every screen a doctor can reach for the minimal child (Noa), in tap order, before the full screen and the components.
// Features listed in LIVE render their frames from one HTML file instead of images: the frame's img name (without .jpg) is the frame id in that file.
window.LIVE = { "kartela-mjekesore": "live/kartela-mjekesore.html", "rezultati": "live/rezultati.html", "profili-i-femijes": "live/profili-i-femijes.html", "profili-i-kujdestarit": "live/profili-i-kujdestarit.html", "gjendjet-e-sistemit": "live/gjendjet-e-sistemit.html", "profili-i-mjekut": "live/profili-i-mjekut.html", "turni-live": "live/turni-live.html", "thirrja-video": "live/thirrja-video.html", "konsultat": "live/konsultat.html", "biseda": "live/biseda.html" };
window.FEATURES = [
  {
    id: "turni-live",
    name: "Turni: Live",
    side: "doctor",
    date: "31.10.2026",
    purpose: "The doctor's landing while online: every call and message waiting right now. A card opens in place to show only what helps before accepting, with a link to the Kartela.",
    path: {
      note: "Noa is the only child waiting, by message. Prano opens the chat, which is designed separately, so the path ends at the Kartela.",
      frames: [
        { state: "min", img: "path-1.jpg", title: "Live", spec: "Opens on Live. One card: wait time, name, age and Prano." },
        { state: "exp", img: "path-2.jpg", via: "Tap the card", title: "Card open", spec: "Opens in place: parent note, Pesha and Mosha, Kartela mjekësore. Noa has no allergies or chronic illnesses, so neither shows." },
        { state: "min", img: "screen-min.jpg", from: "kartela-mjekesore", via: "Tap Kartela mjekësore", page: true, title: "Kartela mjekësore", spec: "Opens Noa's Kartela. Back returns to Live with the card still open." }
      ]
    },
    screen: {
      note: "Header, Turni card, Live/Agjenda toggle and bottom bar are the current app's; only the waiting cards are new. Anisa chose this doctor, so her card is first; the rest follow in order of arrival.",
      frames: [
        { state: "min", img: "screen-min.jpg", title: "Noa Leka", spec: "One card, closed." },
        { state: "full", img: "screen-full.jpg", title: "Four waiting", spec: "Calls and messages in one list; the icon on Prano shows which is which." }
      ]
    },
    components: [
      { name: "Live and Agjenda tabs", note: "Same toggle as the current app.", frames: [
        { state: "col", img: "seg-live.jpg", title: "Someone waiting", spec: "Live is active with its count." },
        { state: "min", img: "seg-zero.jpg", title: "Nobody waiting", spec: "Count 0." }
      ]},
      { name: "Waiting card", note: "Closed: wait time, name with presence dot, age, the open indicator and Prano. Prano is active on every card; its icon shows chat or video.", frames: [
        { state: "col", img: "q-ok.jpg", title: "Within time", spec: "Green wait block up to 5 minutes." },
        { state: "col", img: "q-col.jpg", title: "Over 5 min", spec: "Amber after 5 minutes. Prano with the chat icon accepts the message." },
        { state: "col", img: "q-video.jpg", title: "Video call", spec: "Prano with the video icon accepts the call." },
        { state: "col", img: "q-away.jpg", title: "Parent away", spec: "Grey dot: the parent left the app while waiting." },
        { state: "col", img: "q-long.jpg", title: "Long name", spec: "The name wraps; nothing is cut." }
      ]},
      { name: "Waiting card, open", note: "Tap the card to open it in place. The age leaves the title because Mosha shows it. Sections with nothing in them are hidden.", frames: [
        { state: "exp", img: "q-exp-min.jpg", title: "Minimal", spec: "Note, Pesha and Mosha, Kartela mjekësore." },
        { state: "exp", img: "q-al.jpg", title: "Allergies only", spec: "Alergjitë appears under Pesha and Mosha because the child has one; Sëmundje kronike stays hidden." },
        { state: "exp", img: "q-chr.jpg", title: "Chronic illness only", spec: "Sëmundje kronike appears in amber; Alergjitë stays hidden." },
        { state: "exp", img: "q-photos.jpg", title: "Note with photos", spec: "Photos the parent attached sit under the note; tap opens them full screen." },
        { state: "exp", img: "q-nonote.jpg", title: "No note", spec: "If the parent wrote nothing, the note box is hidden (to confirm the note is optional)." },
        { state: "det", img: "screen-min.jpg", from: "kartela-mjekesore", via: "Tap Kartela mjekësore", page: true, title: "Kartela mjekësore", spec: "The full Kartela of that child." }
      ]},
      { name: "Ju zgjodhi juve", note: "The parent chose this doctor. Only one per list, always first.", frames: [
        { state: "col", img: "h-col.jpg", title: "Closed", spec: "Light blue outline and the \"JU ZGJODHI JUVE\" label above the same card." },
        { state: "exp", img: "h-exp.jpg", via: "Tap the card", title: "Open, full", spec: "Both sections appear because Anisa has allergies and chronic illnesses; long lists wrap." },
        { state: "full", img: "screen-open.jpg", page: true, title: "In the screen", spec: "The open card pushes the list down; the page scrolls under the bottom bar." }
      ]},
      { name: "Empty", note: "Online with nobody waiting.", frames: [
        { state: "min", img: "screen-empty.jpg", page: true, title: "Askush nuk po pret", spec: "Quiet empty card in place of the list." }
      ]}
    ],
    rules: [
      ["Open card shows only what helps before accepting", "Parent note, Pesha, Mosha, then Alergjitë and Sëmundje kronike only if the child has any. No measurement dates, no \"Asnjë\". Everything else lives in the Kartela."],
      ["Two tones", "Allergies are pink with the warning icon; chronic illnesses are amber with the repeat icon, everywhere in the app."]
    ]
  },
  {
    id: "konsultat",
    name: "Konsultat",
    side: "doctor",
    date: "01.11.2026",
    purpose: "The doctor's consultation list, read like WhatsApp's chat list: name and time, then one quiet line: the parent's unread message with a count, or an icon and one word for what is owed (Pa rezultat amber, Draft grey).",
    path: {
      note: "Noa is the only active consultation: the parent's first message, not yet read. Tapping the row opens Biseda, so the path covers the two tabs.",
      frames: [
        { state: "min", img: "path-1.jpg", page: true, title: "Aktive", spec: "Opens on Aktive. One row: initial, name, time, and the parent's message with a blue count." },
        { state: "min", img: "path-2.jpg", page: true, via: "Tap Të mbyllura", title: "Të mbyllura, empty", spec: "Noa has no finished consultations, so a quiet empty state." }
      ]
    },
    screen: {
      note: "Title, search, tabs and bottom bar are the current app's; the MJEK pill is removed with nothing in its place. Rows sit flat on the background with inset dividers; Kërkojnë veprim comes first, Në ndjekje after, newest first inside each.",
      frames: [
        { state: "min", img: "screen-min.jpg", title: "Noa Leka", spec: "One row, unread." },
        { state: "full", img: "screen-full.jpg", title: "Four active", spec: "Missing result, unread message and draft under Kërkojnë veprim; a follow-up with its timer under Në ndjekje." }
      ]
    },
    components: [
      { name: "Header and search", note: "No button on the right: the MJEK pill is gone and nothing replaces it.", frames: [
        { state: "col", img: "hd.jpg", title: "Header", spec: "Konsultat title and Kërko fëmijën search." }
      ]},
      { name: "Aktive and Të mbyllura", note: "Same toggle as Turni. Aktive shows its count; Të mbyllura has none.", frames: [
        { state: "col", img: "seg-act.jpg", title: "Aktive", spec: "Default on open." },
        { state: "col", img: "seg-closed.jpg", title: "Të mbyllura", spec: "Tap switches the list to finished consultations." }
      ]},
      { name: "Conversation row", note: "Line 1: initial, name, time. Line 2: one thing only. Colour is slight: the blue unread count, Pa rezultat in amber, Draft in neutral grey; everything else is the usual muted grey. No age (it is in the chat header). Long names and messages are cut with an ellipsis. Tap opens the chat.", frames: [
        { state: "col", img: "r-unread.jpg", title: "Unread, one", spec: "The parent wrote and the doctor has not opened it: the message in dark text and a blue count." },
        { state: "col", img: "r-unread-many.jpg", title: "Unread, many", spec: "The count shows how many messages are unread." },
        { state: "col", img: "r-result.jpg", title: "Pa rezultat", spec: "The consultation has no result yet: amber file icon and Pa rezultat, the one thing still owed to the parent." },
        { state: "col", img: "r-draft.jpg", title: "Draft", spec: "The doctor started a message and left: neutral grey pencil and Draft, slightly stronger than the preview text." },
        { state: "col", img: "r-follow.jpg", title: "Në ndjekje", spec: "Result sent, follow-up running: grey clock and the time left." },
        { state: "col", img: "r-long.jpg", title: "Long name", spec: "The name and message are cut; the time stays whole." }
      ]},
      { name: "Finished consultation row", note: "Të mbyllura lists one row per finished consultation, titled by its diagnosis, newest first.", frames: [
        { state: "col", img: "c-list.jpg", title: "Rows", spec: "The diagnosis in grey; date in place of the time (dd.mm this year, year only for earlier years)." },
        { state: "full", img: "screen-closed.jpg", page: true, title: "In the screen", spec: "Tap opens the chat with its result." }
      ]},
      { name: "Empty", note: "Quiet icon, one title, one line.", frames: [
        { state: "min", img: "e-active.jpg", page: true, title: "No active consultations", spec: "Aktive with nothing open; the section labels are hidden." },
        { state: "min", img: "path-2.jpg", page: true, title: "Nothing finished", spec: "Të mbyllura before the first finished consultation." }
      ]}
    ],
    rules: [
      ["One thing per row, by priority", "Unread message first, then Draft, then Pa rezultat. Pa rezultat comes back as soon as the doctor has read the parent's messages."],
      ["Two sections, no filters", "Kërkojnë veprim holds anything with a draft, an unread message or a missing result; Në ndjekje holds consultations with a result sent and the follow-up still running. A parent reply moves the row back up. Sections with no rows are hidden."],
      ["Slight colour only", "Pa rezultat is amber text, Draft is neutral grey text, the unread count is blue; nothing else is coloured. No status icons on the initial, no tinted rows, no pills. The Konsultat badge in the bottom bar counts the rows under Kërkojnë veprim."]
    ]
  },
  {
    id: "biseda",
    name: "Biseda",
    side: "doctor",
    date: "02.11.2026",
    purpose: "The consultation chat, built like WhatsApp: the child and whether the parent is online at the top, the conversation with sent, delivered and seen ticks, one way to write the result at the bottom. The name opens the chat info, like a WhatsApp contact page; ⋯ holds search and urgent advice.",
    path: {
      note: "Noa's video consultation, opened from Konsultat. Before the result there is no message box: in a video consultation messaging opens with the result. Noa has no photos or documents in the chat, so the info page has no media section.",
      frames: [
        { state: "min", img: "path-1.jpg", page: true, title: "Before the result", spec: "Parent's note, the call, and Shkruaj rezultatin as the only action. Green dot: Klea is in the app." },
        { state: "min", img: "path-1.jpg", from: "rezultati", page: true, via: "Tap Shkruaj rezultatin", title: "Rezultati", spec: "The result form opens full screen." },
        { state: "col", img: "path-3.jpg", page: true, via: "Dërgo rezultatin", title: "Result sent", spec: "The result card joins the thread with how long the parent can still write under it, and the message box opens." },
        { state: "det", img: "path-9.jpg", from: "rezultati", page: true, via: "Tap Hape", title: "The result page", spec: "The same result page as everywhere else." },
        { state: "det", img: "path-5.jpg", page: true, via: "Back, tap Noa Leka", title: "Chat info", spec: "Avatar, name and age; Kartela mjekësore and Profili i fëmijës tiles, the guardian in the chat, Bllokoni and Raportoni in red." },
        { state: "det", img: "pf-screen-min.jpg", from: "profili-i-femijes", page: true, via: "Tap Profili i fëmijës", title: "Profili i fëmijës", spec: "Allergies and chronic illnesses are read here, not in the chat." },
        { state: "det", img: "screen-min.jpg", from: "kartela-mjekesore", page: true, via: "Back, tap Kartela mjekësore", title: "Kartela", spec: "Opens on Diagnoza." },
        { state: "det", img: "gp-min.jpg", from: "profili-i-kujdestarit", page: true, via: "Back, tap Klea Leka", title: "Guardian", spec: "The guardian sheet, read-only." },
        { state: "det", img: "path-10.jpg", page: true, via: "Close, tap Raportoni Klea Leka", title: "Raporto", spec: "One reason, then Dërgo raportimin. The parent is not told." },
        { state: "det", img: "path-11.jpg", page: true, via: "Close, tap Bllokoni Klea Leka", title: "Blloko", spec: "Confirm sheet that says what blocking does." },
        { state: "det", img: "path-6.jpg", page: true, via: "Anulo, back to the chat, tap ⋯", title: "Menu", spec: "Kërko në bisedë and Këshilloni kujdes urgjent." },
        { state: "exp", img: "path-7.jpg", page: true, via: "Tap Kërko në bisedë", title: "Search", spec: "The header becomes the field; matches are marked and the bottom steps through them." },
        { state: "det", img: "path-8.jpg", page: true, via: "Anulo, ⋯, Këshilloni kujdes urgjent", title: "Urgjencë", spec: "The same confirmation as in the call." },
        { state: "col", img: "path-9.jpg", page: true, via: "Po, dërgoje", title: "Urgent advice sent", spec: "The advice appears in the thread, tinted pink, with its ticks." },
        { state: "exp", img: "path-12.jpg", page: true, via: "Hold your message", title: "Hold a message", spec: "The message lifts over a blurred chat with Përgjigju, Kopjo and Fshi." },
        { state: "det", img: "path-13.jpg", page: true, via: "Tap +", title: "Dërgoni prindit", spec: "Camera, gallery and documents." }
      ]
    },
    screen: {
      note: "Header, thread and bottom are one column. The header never scrolls away. No tags in the header: what is owed shows at the bottom, allergies are in Profili i fëmijës.",
      frames: [
        { state: "min", img: "screen-min.jpg", title: "Noa Leka", spec: "Video consultation, before the result." },
        { state: "full", img: "screen-full.jpg", title: "Anisa", spec: "Long name wraps; a dropped call followed by a full one." }
      ]
    },
    components: [
      { name: "Header", note: "Back, then the name with chevron (opens the chat info), age and consultation type, and the guardian's presence. ⋯ on the right. No tags.", frames: [
        { state: "min", img: "head-on.jpg", title: "Parent online", spec: "Green dot and \"Klea Leka, në linjë\" while the parent has the app open." },
        { state: "col", img: "head-off.jpg", title: "Parent offline", spec: "Grey dot and \"jashtë linje\". Messages still arrive as notifications." },
        { state: "col", img: "head-long.jpg", title: "Long name", spec: "The name wraps; the presence line stays one line." }
      ]},
      { name: "Chat info", note: "Opened from the name, laid out like a WhatsApp contact page: the child's avatar standing free (as on the profile), name and age, two tiles, shared media, the guardian in the chat, and Bllokoni and Raportoni in red at the bottom.", frames: [
        { state: "min", img: "info-min.jpg", page: true, title: "Nothing shared", spec: "No photos, links or documents yet, so no media card." },
        { state: "full", img: "info-full.jpg", page: true, title: "With media", spec: "Foto, lidhje dhe dokumente with the count and the latest four; tap opens them all. A long name wraps." }
      ]},
      { name: "Foto, lidhje dhe dokumente", note: "Everything sent in this chat, newest first, grouped by day, in three tabs.", frames: [
        { state: "det", img: "media-photo.jpg", page: true, title: "Foto", spec: "Grid of photos; tap opens the photo full screen." },
        { state: "det", img: "media-link.jpg", page: true, title: "Lidhje", spec: "One row per link with its title, site and date; tap opens it in the browser." },
        { state: "det", img: "media-doc.jpg", page: true, title: "Dokumente", spec: "One row per file with pages and date; tap opens it in the file overlay." }
      ]},
      { name: "Menu", note: "Bottom sheet from ⋯. Only what is done inside this chat; report and block are in the chat info, as in WhatsApp.", frames: [
        { state: "det", img: "menu-min.jpg", page: true, title: "Default", spec: "Kërko në bisedë and Këshilloni kujdes urgjent." },
        { state: "det", img: "menu-sched.jpg", page: true, title: "Scheduled consultation", spec: "Ripllanifikoni konsultën appears only for a scheduled consultation and sends the reschedule card." }
      ]},
      { name: "Kërko në bisedë", note: "Search inside this chat only.", frames: [
        { state: "exp", img: "search.jpg", page: true, title: "Results", spec: "Matches marked in amber; the bottom shows n nga n and steps up and down. Anulo returns to the chat." }
      ]},
      { name: "Urgjencë", note: "From the menu. The same message and confirmation as in the call. Rare, so confirmed every time.", frames: [
        { state: "det", img: "urg-sheet.jpg", page: true, title: "Confirm", spec: "Shows the parent's message word for word. No close button: Anulo cancels." },
        { state: "col", img: "urg-sent.jpg", via: "Po, dërgoje", title: "In the thread", spec: "The advice as a pink message on the doctor's side." }
      ]},
      { name: "Raporto and Blloko", note: "From the bottom of the chat info. For a parent who is abusive or misuses the app. Report goes to the Kidocare team; block stops the parent from writing to or choosing this doctor. Behaviour to confirm with the team.", frames: [
        { state: "det", img: "report.jpg", page: true, title: "Raporto", spec: "One reason (radio), Dërgo raportimin in red. The parent is not told." },
        { state: "det", img: "block.jpg", page: true, title: "Blloko", spec: "Says what happens: no more messages or bookings, the open consultation closes, can be undone." },
        { state: "col", img: "blocked.jpg", page: true, via: "Blloko", title: "Blocked", spec: "The message box is replaced by a grey line with Zhblloko." }
      ]},
      { name: "Messages", note: "Parent on the left in white, doctor on the right in blue. The ticks tell what happened to the doctor's message, as in WhatsApp; on the blue bubble seen is mint, since blue would not show.", frames: [
        { state: "col", img: "tk-sent.jpg", title: "Sent", spec: "One white tick: it left the phone." },
        { state: "col", img: "tk-dlv.jpg", title: "Delivered", spec: "Two white ticks: it reached the parent's phone." },
        { state: "col", img: "tk-seen.jpg", title: "Seen", spec: "Two mint ticks: the parent opened it." },
        { state: "col", img: "msg-file.jpg", title: "Photo, document, link", spec: "From the parent. A photo opens full screen, a document in the file overlay, a link in the browser; a link shows its title and site." },
        { state: "col", img: "reply-msg.jpg", title: "Reply", spec: "The quoted message sits on top of the answer; tap jumps to it." },
        { state: "col", img: "deleted.jpg", title: "Deleted", spec: "\"Ju e fshitë këtë mesazh\"; the parent sees \"Mesazhi u fshi\"." }
      ]},
      { name: "Hold a message", note: "Holding a message lifts it over a blurred chat with its actions. No forward: a child's health details stay in this chat.", frames: [
        { state: "exp", img: "lp-own.jpg", page: true, title: "Your message", spec: "Përgjigju, Kopjo, and Fshi in red (only shortly after sending; window to confirm)." },
        { state: "exp", img: "lp-parent.jpg", page: true, title: "Parent's message", spec: "Përgjigju and Kopjo." },
        { state: "exp", img: "lp-file.jpg", page: true, title: "Parent's file", spec: "Përgjigju and Ruaj në Kartela, which adds it to Analiza without the parent uploading it again." },
        { state: "exp", img: "lp-link.jpg", page: true, title: "Parent's link", spec: "Hap lidhjen first (opens it in the browser, same as a tap), then Përgjigju, Kopjo lidhjen, Ruaj në Kartela. A saved link sits in Analiza like a file and opens in the browser." },
        { state: "col", img: "reply-bar.jpg", via: "Tap Përgjigju", title: "Replying", spec: "The quote sits above the field; X cancels the reply." }
      ]},
      { name: "Call", note: "Each call is one card on the doctor's side.", frames: [
        { state: "col", img: "call-ok.jpg", title: "Ended normally", spec: "Video-thirrje and its length." },
        { state: "col", img: "call-drop.jpg", title: "Dropped, latest", spec: "Ended by lost connection (Thirrja video, Call dropped), not by Mbyll: amber icon, Thirrja u ndërpre. Telefono përsëri calls the parent again." },
        { state: "col", img: "call-drop-old.jpg", title: "Dropped, then called again", spec: "Once a later call exists, the dropped card loses its button." }
      ]},
      { name: "Result card", note: "Sent result in the thread, titled by its diagnosis. Hape opens the result page. Under it, quietly, how long the parent can still write (the window chosen in Rezultati).", frames: [
        { state: "col", img: "res.jpg", title: "Sent", spec: "Green file icon, Rezultati, the diagnosis, Hape; the time left under it." },
        { state: "col", img: "res-long.jpg", title: "Long diagnosis", spec: "Wraps; nothing is cut. The time left counts down." }
      ]},
      { name: "Kërkesë për riplanifikim", note: "Sent from Ripllanifikoni konsultën in the menu, on the doctor's side of the thread. The proposed time is always inside the shift.", frames: [
        { state: "col", img: "rs-pend.jpg", title: "Waiting", spec: "Old time struck through, new time, one grey line on what happens without an answer, pink Në pritje të prindit. Anulo kërkesën withdraws it." },
        { state: "col", img: "rs-ok.jpg", title: "Accepted", spec: "Only the new time and green Prindi pranoi. No button." },
        { state: "col", img: "rs-no.jpg", title: "Refused", spec: "Grey Prindi refuzoi; the consultation is cancelled." },
        { state: "col", img: "rs-none.jpg", title: "No answer", spec: "Grey Pa përgjigje; the consultation is cancelled at the old time." }
      ]},
      { name: "Bottom", note: "One layout for every consultation: Shkruaj rezultatin until the result is sent, the message box when messaging is open. Video consultations open messaging with the result; text consultations have it from the start.", frames: [
        { state: "min", img: "bot-video.jpg", title: "Video, before the result", spec: "Only Shkruaj rezultatin." },
        { state: "col", img: "bot-text.jpg", title: "Text, before the result", spec: "Shkruaj rezultatin above the message box." },
        { state: "col", img: "bot-draft.jpg", title: "Draft saved", spec: "The doctor left the form: Vazhdo rezultatin reopens the draft." },
        { state: "col", img: "bot-empty.jpg", via: "Result sent", title: "Message box, empty", spec: "+ and the field; send is grey until there is text." },
        { state: "col", img: "bot-typed.jpg", via: "Type", title: "Message box, typed", spec: "Send turns blue." },
        { state: "det", img: "attach.jpg", page: true, via: "Tap +", title: "Dërgoni prindit", spec: "Bëni një foto, Zgjidhni nga galeria, Dokument. To confirm against what the app sends today." }
      ]}
    ],
    rules: [
      ["No tags in the header", "The header says who the child is and whether the parent is online. What is owed shows at the bottom; allergies and chronic illnesses are in Profili i fëmijës, one tap away through the chat info."],
      ["Ticks, not message info", "One tick sent, two delivered, two mint seen. There is no separate info screen."],
      ["Nothing leaves the chat", "No forward and no export. A parent's file or link can only be saved into the child's own Kartela."],
      ["Rare actions out of the way", "Search and urgent advice live behind ⋯; report and block at the bottom of the chat info. The header keeps two buttons: back and ⋯."]
    ]
  },
  {
    id: "thirrja-video",
    name: "Thirrja me video",
    side: "doctor",
    date: "31.10.2026",
    purpose: "The video consultation, kept as bare as a WhatsApp call: the name and timer on top, allergies and chronic illnesses only if any, your camera in the corner and four buttons. The profile and the Kartela open from the name without leaving the call.",
    path: {
      note: "Noa's call, opened with Prano on Live. Noa has no allergies or chronic illnesses, so the header shows only name and timer. The call never stops: other screens keep it in a floating tile.",
      frames: [
        { state: "min", img: "path-call.jpg", page: true, title: "In the call", spec: "Parent full screen, your camera in the top right corner. Name and timer top left. Four buttons: Shënime, Kamera, Zëri, Mbyll." },
        { state: "det", img: "path-profile.jpg", page: true, via: "Tap the name", title: "Profile, call floating", spec: "Profili i fëmijës opens full screen and the call shrinks to a floating tile with the timer, bottom right. Drag moves it; tap or Back returns to the call." },
        { state: "det", img: "path-kartela.jpg", page: true, via: "Tap Kartela mjekësore", title: "Kartela, call floating", spec: "The Kartela opens from the profile's blue button, as it does everywhere else. The tile follows." },
        { state: "exp", img: "path-notes.jpg", page: true, via: "Back to the call, tap Shënime", title: "Shënime", spec: "Up to 250 characters, saved as you type, no save button. They fill Vlerësimi when Rezultati opens. Tapping the field opens the keyboard and the sheet rises; the call keeps running in the floating tile." },
        { state: "det", img: "path-end.jpg", page: true, via: "Close, tap Mbyll (red)", title: "Mbyll", spec: "Three choices: Mbyll dhe shkruaj rezultatin (blue), Këshilloni kujdes urgjent (red outline), Vazhdo thirrjen. The dot on Shënime shows notes were written." },
        { state: "det", img: "path-urg.jpg", page: true, via: "Tap Këshilloni kujdes urgjent", title: "Urgjencë", spec: "Shows the exact message the parent receives. Po, dërgoje sends it and returns to the call, which continues. Anulo goes back." },
        { state: "min", img: "path-1.jpg", from: "rezultati", page: true, via: "Mbyll, then Mbyll dhe shkruaj rezultatin", title: "Rezultati", spec: "Rezultati opens; Vlerësimi already holds the call notes and can be edited." }
      ]
    },
    screen: {
      note: "The parent's video fills the screen. On top: name, timer, chips, your camera and four buttons, nothing else. Video feeds are wireframes here.",
      frames: [
        { state: "min", img: "screen-min.jpg", page: true, title: "Noa Leka", spec: "Name and timer only." },
        { state: "full", img: "screen-full.jpg", page: true, title: "Anisa", spec: "Long name wraps. One pink allergy chip and one amber chronic chip, each with +n; the full lists are in the profile." }
      ]
    },
    components: [
      { name: "Header", note: "Name with the timer under it, like WhatsApp. Tap the name to open Profili i fëmijës, and the Kartela from there. Allergies pink, chronic illnesses amber, only if the child has any. No age and no queue: both were seen on Live before accepting.", frames: [
        { state: "min", img: "head-min.jpg", title: "Nothing to flag", spec: "Name, chevron, timer. No chips." },
        { state: "col", img: "head-al.jpg", title: "Allergy only", spec: "One pink chip." },
        { state: "col", img: "head-chr.jpg", title: "Chronic only", spec: "Amber chip with +2 for the other two." },
        { state: "col", img: "head-full.jpg", title: "Both", spec: "Pink first, amber second; each shows the first item and +n." },
        { state: "col", img: "head-long.jpg", title: "Long name", spec: "The full name wraps to two lines; nothing is cut." }
      ]},
      { name: "Control bar", note: "Four buttons at most, icons only. Off states turn the button white with a slashed icon, so on and off never read as an alert.", frames: [
        { state: "col", img: "bar-on.jpg", title: "Default", spec: "Shënime, Kamera, Zëri, Mbyll." },
        { state: "col", img: "bar-muted.jpg", title: "Muted", spec: "Zëri white with the slashed mic." },
        { state: "col", img: "bar-cam.jpg", title: "Camera off", spec: "Kamera white with the slashed camera." },
        { state: "col", img: "bar-noted.jpg", title: "Notes written", spec: "Blue dot on Shënime once there is text." },
        { state: "min", img: "hidden.jpg", page: true, title: "Controls hidden", spec: "Tap the video: the bar hides so the child is fully visible; name, timer, chips and your camera stay. Tap again to show it." }
      ]},
      { name: "Your camera", note: "Your own camera in the top right corner, right under the status bar, with nothing else on that side. Drag to move it.", frames: [
        { state: "col", img: "self-on.jpg", page: true, title: "On", spec: "Your camera in the small tile." },
        { state: "col", img: "self-off.jpg", page: true, title: "Off", spec: "Tile turns dark with the camera-off icon; the parent no longer sees you." }
      ]},
      { name: "Floating call", note: "Any screen opened from the call keeps it in a floating tile with the timer, bottom right. Tap returns to the call; drag moves it.", frames: [
        { state: "det", img: "pip-profile.jpg", page: true, title: "Over the profile", spec: "Anisa's profile with the call floating." },
        { state: "det", img: "pip-kartela.jpg", page: true, title: "Over the Kartela", spec: "Anisa's Kartela with the call floating." }
      ]},
      { name: "Shënime", note: "Notes during the call, at most 250 characters. They become Vlerësimi in Rezultati.", frames: [
        { state: "min", img: "notes-empty.jpg", page: true, title: "Empty", spec: "Placeholder Shkruani vlerësimin tuaj, counter 0/250." },
        { state: "col", img: "notes-typed.jpg", page: true, title: "Written", spec: "The counter counts up. Saving is automatic and silent." },
        { state: "col", img: "notes-limit.jpg", page: true, title: "At 250", spec: "Counter turns amber and typing stops. Never an error." }
      ]},
      { name: "Mbyll and Urgjencë", note: "Urgjencë is rare, so it has no button of its own: it sits in the Mbyll sheet, where the doctor decides how the consultation ends. It is confirmed, and the call continues after it.", frames: [
        { state: "det", img: "end-sheet.jpg", page: true, title: "Mbyll", spec: "Blue primary, red-outlined Këshilloni kujdes urgjent, Vazhdo thirrjen. No close button." },
        { state: "det", img: "urg-sheet.jpg", page: true, via: "Tap Këshilloni kujdes urgjent", title: "Confirm", spec: "Shows the parent's message word for word. No close button: Anulo cancels." },
        { state: "col", img: "urg-sent.jpg", page: true, via: "Po, dërgoje", title: "Sent", spec: "Back in the call with a quiet confirmation top left." }
      ]},
      { name: "Call states", note: "Short notices sit top left under the header and leave when the problem goes away. Bigger interruptions show in the middle of the video; the bar stays so the doctor can always end the call.", frames: [
        { state: "sys", img: "st-connecting.jpg", page: true, title: "Connecting", spec: "After Prano: Duke u lidhur me Klea Leka in the middle. No timer and no small camera tile until the parent joins." },
        { state: "sys", img: "st-weak-me.jpg", page: true, title: "Your connection weak", spec: "Amber notice: Lidhja juaj është e dobët." },
        { state: "sys", img: "st-weak-parent.jpg", page: true, title: "Parent's connection weak", spec: "Amber notice: Lidhja e prindit është e dobët." },
        { state: "sys", img: "st-battery.jpg", page: true, title: "Low battery", spec: "At 15% or less: Bateria 12%. Lidhni karikuesin. Leaves once charging." },
        { state: "sys", img: "st-stack.jpg", page: true, title: "Two notices", spec: "Notices stack, newest at the bottom." },
        { state: "sys", img: "st-parent-muted.jpg", page: true, title: "Parent muted", spec: "Neutral notice while the parent's mic is off." },
        { state: "sys", img: "st-parent-cam.jpg", page: true, title: "Parent camera off", spec: "Centre message; the call continues with sound." },
        { state: "sys", img: "st-reconnect.jpg", page: true, title: "Reconnecting", spec: "Last picture frozen and blurred, Duke u rilidhur. The timer keeps running." },
        { state: "sys", img: "st-parent-left.jpg", page: true, title: "Parent left", spec: "Waits for the parent to return; Mbyll stays available." },
        { state: "sys", img: "st-dropped.jpg", page: true, title: "Call dropped", spec: "After more than a minute without connection. Notes are kept; Shkruani rezultatin opens Rezultati." }
      ]}
    ],
    rules: [
      ["Four buttons at most", "Shënime, Kamera, Zëri, Mbyll. Nothing floats on the video besides the header and your camera."],
      ["On and off read without colour", "A toggled-off control is white with a slashed icon. Red is only for Mbyll and the urgent advice."],
      ["The call never stops for reading", "The name opens the profile and the profile opens the Kartela, with the call floating. Back or a tap on the tile returns to the call."],
      ["Notes become Vlerësimi", "Shënime are capped at 250 characters, the same cap as Vlerësimi in Rezultati, and prefill it."]
    ]
  },
  {
    id: "kartela-mjekesore",
    name: "Kartela mjekësore",
    side: "doctor",
    date: "30.10.2026",
    purpose: "The child's medical record for doctors: first with sign-up data only, then each component in every state it has.",
    path: {
      note: "Every screen the doctor can reach for Noa, who has only completed sign-up. Every list is empty, so nothing opens further.",
      frames: [
        { state: "min", img: "screen-min.jpg", title: "Diagnoza", spec: "Opens on Diagnoza. Gjeneralitetet from sign-up, one quiet empty card." },
        { state: "min", img: "path-ilace.jpg", via: "Tap Ilaçe", title: "Ilaçe", spec: "Gjeneralitetet stays. \"Ende pa ilaçe\" replaces the list." },
        { state: "min", img: "path-analiza.jpg", via: "Tap Analiza", title: "Analiza", spec: "\"Ende pa analiza\" replaces the list. Back returns to the child profile." }
      ]
    },
    screen: {
      note: "Noa has only completed sign-up. Anisa has everything filled in, including the edge cases: a long name, three allergies, out-of-app entries.",
      frames: [
        { state: "min", img: "screen-min.jpg", title: "Noa Leka", spec: "Gjeneralitetet from sign-up, empty history." },
        { state: "full", img: "screen-full.jpg", title: "Anisa Marjeta Xhaferraj-Gjonbalaj", spec: "Same layout, every section filled. Diagnoza tab open." }
      ]
    },
    components: [
      { name: "Gjeneralitetet", note: "Who the child is. Shown in full on load, then pinned as a compact header once the doctor scrolls.", frames: [
        { state: "min", img: "gj-min.jpg", spec: "Sign-up data only. No allergies, so the Alergjitë row is not shown." },
        { state: "exp", img: "gj-exp.jpg", via: "Parent adds data", spec: "On load. Long names wrap, allergies wrap to a second line." },
        { state: "col", img: "gj-col.jpg", via: "Scroll", spec: "Scroll past the card. Name, gender, age and allergy count stay pinned." },
        { state: "col", img: "gj-col-min.jpg", spec: "Same header for Noa: no allergies, so no pink pill." }
      ]},
      { name: "Vaksinimet", note: "One answer from sign-up, two forms.", frames: [
        { state: "col", img: "vac-ok.jpg", spec: "Up to date: green \"Sipas kalendarit\"." },
        { state: "col", img: "vac-no.jpg", spec: "Not up to date: amber \"Jo të plota\". No extra text." }
      ]},
      { name: "Pesha, Gjatësia, Mosha", note: "The measurement date changes form when it is old.", frames: [
        { state: "col", img: "meas-ok.jpg", spec: "Measured this year: muted \"Matur më 20.10\"." },
        { state: "col", img: "meas-stale.jpg", spec: "Measured in an earlier year: amber with a clock, so the doctor knows to ask again." }
      ]},
      { name: "Tabs", note: "Switches between Diagnoza, Ilaçe and Analiza. There is no filter: each list is already ordered (Kronike first, Aktive first, newest first), and the doctor's own entries carry a Me ju chip.", frames: [
        { state: "min", img: "tabs-min.jpg", spec: "No entries. Counts read 0 in muted ink." },
        { state: "col", img: "tabs-col.jpg", via: "First entry", spec: "On load. A count per tab." }
      ]},
      { name: "Diagnoza", note: "Rows never expand in place. Every diagnosis opens its own page, which takes one of three forms depending on where it came from.", frames: [
        { state: "min", img: "dx-min.jpg", spec: "No diagnoses. One quiet empty card." },
        { state: "col", img: "dx-col.jpg", via: "First entry", spec: "Kronike first, then Akute. Title, date, and a chip only for Me ju or Jashtë Kidocare." },
        { state: "col", img: "dx-one.jpg", spec: "Only one group (no chronic conditions): its header stays, the other disappears." },
        { state: "det", img: "dx-det-kidocare.jpg", via: "Tap a row", page: true, title: "Konsultë në Kidocare", spec: "The one result page, shared with the parent: parent's note, Vlerësimi, medicines, tests, referral, steps and warning signs, date and doctor. The doctor's version has no chat button." },
        { state: "det", img: "dx-det-other.jpg", page: true, title: "Konsultë, another doctor", spec: "Exactly the same page as the doctor's own consultations; the footer names the other doctor." },
        { state: "det", img: "dx-det-kronike.jpg", page: true, title: "Sëmundje kronike", spec: "Current medicines and a timeline of everything linked to the condition." },
        { state: "det", img: "dx-det-kronike-jashte.jpg", page: true, title: "Sëmundje kronike, from the parent", spec: "Jashtë Kidocare chip, parent's note, documents, and the unverified line at the bottom." },
        { state: "det", img: "dx-det-jashte.jpg", page: true, title: "Diagnozë jashtë Kidocare", spec: "Parent's note, documents and links, marked as not verified." },
        { state: "det", img: "dx-det-jashte-min.jpg", page: true, title: "Diagnozë jashtë Kidocare, minimal", spec: "When the parent typed only the name and the year, the entry opens as a bottom sheet over the list instead of a mostly empty page. Same content, same unverified line." }
      ]},
      { name: "Ilaçe", note: "Medicines don't open. The card holds everything the doctor needs: the name, whether it is active, and what it is for when known.", frames: [
        { state: "min", img: "med-min.jpg", spec: "No medicines. One quiet empty card." },
        { state: "col", img: "med-col.jpg", via: "First entry", spec: "Aktive, then Të mëparshme. All cards are the same height. Strength, \"Që nga\" and \"Për\" show only when known; past medicines show when they ended and a grey icon. No source chip." },
        { state: "col", img: "med-one.jpg", spec: "Only active medicines: the Të mëparshme header disappears." }
      ]},
      { name: "Analiza", note: "Tests don't expand. Each card shows a preview of the file; tapping opens the file itself.", frames: [
        { state: "min", img: "test-min.jpg", spec: "No tests. One quiet empty card." },
        { state: "col", img: "test-col.jpg", via: "First entry", spec: "Newest first, all cards the same height. File preview on the left, then the test, what it is for (when known) and the date. A pending test shows a clock and \"Pa rezultat\" next to the date. No source chip." },
        { state: "det", img: "test-det.jpg", via: "Tap the card", page: true, title: "File overlay", spec: "The file opens on a glass layer over the Kartela, centred, with the test, what it is for and the date below. Swipe between pages, close with X." },
        { state: "det", img: "test-det-one.jpg", page: true, title: "One-page file", spec: "No page count and no dots." },
        { state: "det", img: "test-det-err.jpg", page: true, title: "File did not open", spec: "\"Skedari nuk u hap\" with one button to try again; the info card stays." }
      ]},
      { name: "Long text", note: "Medicine and test cards have a fixed height, so long text never grows them.", frames: [
        { state: "col", img: "long.jpg", spec: "Each line is cut to one line with \"...\". The full text is in the file or the diagnosis it links to." }
      ]}
    ],
    rules: [
      ["No filter", "Lists are ordered instead: Kronike before Akute, Aktive before Të mëparshme, tests newest first. \"Me ju\" is a chip on the card."],
      ["Light logging", "Parents add a medicine with its name or a photo, plus \"does your child still take it?\". A test is a photo or file, with an optional \"what is it for\". Dose, strength and dates are optional; there is no end date."],
      ["Nothing to show, nothing printed", "Allergies, chronic illnesses and current medicines appear only when the child has some: no label, no \"Asnjë\". Allergies are pink, chronic illnesses amber. Lists with no entries show one quiet empty card."],
      ["Gjatësia", "Height is collected at sign-up, so it sits next to Pesha. Both share one \"Matur më\" date."],
      ["Kujdestari", "The Kartela shows the main guardian only. All guardians stay on Profili i fëmijës."],
      ["Build", "Each component is one piece of markup with its states as variants. Statuses (Aktive, Pa rezultat) are computed, never set by hand."]
    ]
  },
  {
    id: "profili-i-femijes",
    name: "Profili i fëmijës",
    side: "doctor",
    date: "30.10.2026",
    purpose: "Who the child is, who to contact, a clinical snapshot, and two buttons: the full Kartela and the consultations with this doctor.",
    path: {
      note: "Every screen the doctor can reach from Noa's profile, in tap order. Konsultat me ju is hidden at 0 (first contact), so the Kartela and the guardian are the only ways forward.",
      frames: [
        { state: "min", img: "pf-screen-min.jpg", title: "Profili i fëmijës", spec: "Opened from the chat. Sign-up data, one guardian. No Pamje klinike and no Konsultat me ju button, because Noa has nothing for either." },
        { state: "min", img: "screen-min.jpg", from: "kartela-mjekesore", via: "Tap Kartela mjekësore", title: "Kartela, Diagnoza", spec: "Opens on Diagnoza with one quiet empty card." },
        { state: "min", img: "path-ilace.jpg", from: "kartela-mjekesore", via: "Tap Ilaçe", title: "Kartela, Ilaçe", spec: "\"Ende pa ilaçe\"." },
        { state: "min", img: "path-analiza.jpg", from: "kartela-mjekesore", via: "Tap Analiza", title: "Kartela, Analiza", spec: "\"Ende pa analiza\"." },
        { state: "min", img: "gp-min.jpg", from: "profili-i-kujdestarit", via: "Back, tap Klea Leka", title: "Profili i kujdestarit", spec: "Bottom sheet over the profile. Klea's only child is Noa, marked \"Profili aktual\". Close with X." }
      ]
    },
    screen: {
      note: "Opened from the chat. Order: who the child is, the Kartela, who to contact, the clinical snapshot, then this doctor's consultations. Referrals are gone: each stays inside the consultation it came from.",
      frames: [
        { state: "min", img: "pf-screen-min.jpg", title: "Noa Leka", spec: "Sign-up data only. First contact, so there is no Konsultat me ju button." },
        { state: "full", img: "pf-screen-full.jpg", title: "Anisa Marjeta Xhaferraj-Gjonbalaj", spec: "Same layout, every section filled, both buttons." }
      ]
    },
    components: [
      { name: "Identity card", note: "Same card as Gjeneralitetet on the Kartela, plus the avatar the parent chose, the patient code and Atësia.", frames: [
        { state: "min", img: "pf-id-min.jpg", spec: "Sign-up data. Every child gets a random animal avatar at sign-up (Noa: the monkey). No allergies, so no Alergjitë row. Atësia is required, so it is never empty." },
        { state: "exp", img: "pf-id-full.jpg", via: "Parent adds data", spec: "The animal the parent chose (Anisa: the bunny). Long names wrap beside it; the code chip stays top right. Vaccines not up to date and an old measurement look exactly as on the Kartela." },
        { state: "col", img: "pf-id-animal.jpg", spec: "Or the parent uploaded a photo of the child (placeholder here). Same size and position as an animal." },
        { state: "col", img: "pf-id-col.jpg", via: "Scroll", spec: "Same compact header as the Kartela: name, gender, age, allergy count." }
      ]},
      { name: "Kujdestarët", note: "A list of rows instead of tiles, so any number of guardians fits.", frames: [
        { state: "min", img: "pf-g-min.jpg", spec: "One guardian from sign-up, marked Kryesore." },
        { state: "col", img: "pf-g-full.jpg", via: "More guardians added", spec: "Each row: name, relation and Kryesore on the main one. Tap opens the guardian profile." },
        { state: "col", img: "pf-g-long.jpg", spec: "A long name wraps to two lines; Kryesore stays next to the relation." }
      ]},
      { name: "Pamje klinike", note: "Names only, as chips. Details live in the Kartela. Hidden entirely when the child has no chronic illnesses and no current medicines (Noa).", frames: [
        { state: "col", img: "pf-c-full.jpg", spec: "Amber chips for chronic conditions, light blue for active medicines. Chips wrap to new lines." },
        { state: "col", img: "pf-c-mixed.jpg", spec: "Only one filled: the empty row is not shown at all." },
        { state: "col", img: "pf-c-long.jpg", spec: "A medicine name too long for one chip is cut with \"...\"." }
      ]},
      { name: "Kartela mjekësore button", note: "Right under the identity card, so it is on screen when the profile opens. The only primary button.", frames: [
        { state: "col", img: "pf-a-kartela.jpg", spec: "Always shown, for every child. Opens the Kartela." }
      ]},
      { name: "Konsultat me ju button", note: "Last on the page, after guardians and the clinical snapshot.", frames: [
        { state: "col", img: "pf-a-cons.jpg", spec: "White, with the count of finished consultations with this doctor. The one in progress is not counted. Hidden at 0, so Noa (first contact) has none." },
        { state: "col", img: "pf-a-cons-one.jpg", spec: "Only one consultation: the button opens that consultation directly, no list." },
        { state: "det", img: "pf-consults.jpg", via: "Tap the button", page: true, title: "Konsultat me ju sheet", spec: "Two or more: a bottom sheet over the profile, newest first, titled by diagnosis. Tap opens the same consultation page as in the Kartela." }
      ]}
    ],
    rules: [
      ["No referrals list", "Referrals live only in the Referimi section of the consultation that made them."],
      ["Finished only", "Konsultat me ju lists and counts only finished consultations, never the one in progress."],
      ["Buttons over lists", "Sections that lead elsewhere become full-width buttons: one primary (Kartela) near the top, the rest white with a count."]
    ]
  },
  {
    id: "profili-i-kujdestarit",
    name: "Profili i kujdestarit",
    side: "doctor",
    date: "29.10.2026",
    purpose: "Who a guardian is and which children they manage on Kidocare. Opens from a row in Kujdestarët on Profili i fëmijës.",
    screen: {
      note: "A bottom sheet over the child profile, since it holds little. Read-only: no contact details (all contact goes through the chat) and no button.",
      frames: [
        { state: "min", img: "gp-min.jpg", title: "Klea Leka", spec: "Noa's mother, from sign-up. One child, the one the doctor came from." },
        { state: "full", img: "gp-full.jpg", title: "Valbona Xhaferraj", spec: "Anisa's mother, main guardian, three children on Kidocare." }
      ]
    },
    components: [
      { name: "Identity", note: "Guardians have no photo, only the profile icon, as in Kujdestarët. Then the name, the relation to the child the doctor came from, and Kryesore if they are the main guardian.", frames: [
        { state: "col", img: "gp-full.jpg", page: true, spec: "Main guardian: Kryesore next to the relation." },
        { state: "col", img: "gp-other.jpg", page: true, spec: "Not the main guardian: no chip." },
        { state: "col", img: "gp-long.jpg", page: true, spec: "A long name wraps to two lines." }
      ]},
      { name: "Fëmijët në Kidocare", note: "Every child this guardian manages, with the count. The child the doctor came from is marked and does not open.", frames: [
        { state: "min", img: "gp-min.jpg", page: true, spec: "Only one child: the current one, with its avatar, marked \"Profili aktual\" and no chevron." },
        { state: "col", img: "gp-full.jpg", page: true, via: "More children", spec: "Current child first, then the others by age, each with their own avatar (photo or animal). Each other row opens that child's profile." },
        { state: "sys", img: "gp-fail.jpg", page: true, spec: "If the list fails, the shared one-row error replaces it; the identity stays." }
      ]}
    ],
    rules: [
      ["Chat only", "Doctors never see a guardian's phone or email. All contact goes through the Kidocare chat."],
      ["Read-only", "The guardian sheet has no actions; it closes with X or by swiping down."]
    ]
  },
  {
    id: "profili-i-mjekut",
    name: "Profili i mjekut",
    side: "doctor",
    date: "30.10.2026",
    purpose: "Opened from the profile card in Zyra: the doctor's own profile, editable with a photo, plus ratings and reviews. Other doctors' profiles open read-only.",
    path: {
      note: "Dr. Arben Shehu has only completed sign-up: name, specialty, licence, workplace and city. No photo, no bio, no reviews yet. Zyra keeps every row of the current app; only the look changes.",
      frames: [
        { state: "min", img: "path-1.jpg", title: "Zyra", spec: "Bottom bar, last tab. Profile card on top (photo, name, verified badge, Aktive, rating when there is one), then Puna, Llogaria, Kalo te prindi and Dil, as in the app now." },
        { state: "min", img: "path-2.jpg", via: "Tap the profile card", title: "Profili", spec: "Centred photo, name, verified badge and rating line, then Profili and Vlerësimet tabs. Ndrysho top right. Bio is empty, so a quiet card invites the doctor to add one." },
        { state: "min", img: "path-3.jpg", via: "Tap Ndrysho", page: true, title: "Ndrysho profilin", spec: "Editable fields first; name, specialty and licence locked at the bottom. Ruaj ndryshimet stays grey until something changes." },
        { state: "min", img: "path-4.jpg", via: "Tap Shtoni foto", page: true, title: "Fotoja e profilit", spec: "Bottom sheet with camera and gallery. No photo yet, so no Hiqni foton." },
        { state: "min", img: "path-5.jpg", via: "Back twice, tap Vlerësimet", title: "Vlerësimet", spec: "Count 0, one quiet empty card explaining where reviews come from." }
      ]
    },
    screen: {
      note: "Dr. Arben Shehu has only sign-up data; Dr. Blerina Kola has everything, including 32 reviews and a licence that expires soon.",
      frames: [
        { state: "min", img: "path-2.jpg", title: "Dr. Arben Shehu", spec: "Sign-up data only." },
        { state: "full", img: "zyra-full.jpg", title: "Zyra, Dr. Blerina Kola", spec: "Photo and rating on the card, amber Skadon on Licenca." },
        { state: "full", img: "screen-full.jpg", title: "Profili, Dr. Blerina Kola", spec: "Specialty, workplace, experience, languages, licence with its expiry, then Bio." },
        { state: "full", img: "screen-full-v.jpg", title: "Vlerësimet, Dr. Blerina Kola", spec: "Average and spread on top, then reviews newest first." }
      ]
    },
    components: [
      { name: "Profile card in Zyra", note: "The entry point. Same content as the app now: photo, name, verified badge, Aktive, rating.", frames: [
        { state: "min", img: "z-card-min.jpg", spec: "No photo: the profile icon. No reviews yet, so no star." },
        { state: "col", img: "z-card-full.jpg", via: "Photo and reviews", spec: "Photo and the average rating next to Aktive. Tap opens the profile." },
        { state: "col", img: "z-card-off.jpg", spec: "Out of shift (Turni off): grey dot, \"Jo aktive\"." },
        { state: "col", img: "z-card-pend.jpg", spec: "Licence still being checked: no verified badge, grey \"Në verifikim\" in place of the status." }
      ]},
      { name: "Licenca row in Zyra", note: "The status chip says when the licence needs attention. The row opens the Licenca page (not designed here).", frames: [
        { state: "col", img: "z-lic.jpg", spec: "Valid: no chip. Expires within 30 days: amber Skadon. Expired: pink Ka skaduar." }
      ]},
      { name: "Profile header", note: "Centred, as in the app. On the doctor's own profile the camera badge opens the photo sheet.", frames: [
        { state: "min", img: "id-min.jpg", spec: "No photo: the profile icon. No reviews: no rating line (the tab already says 0)." },
        { state: "col", img: "id-full.jpg", via: "Photo and reviews", spec: "Uploaded photo (placeholder here) and \"4.8 · 32 vlerësime\"." },
        { state: "col", img: "id-long.jpg", spec: "A long name wraps; the verified badge stays at the end of the last line." },
        { state: "sys", img: "id-fail.jpg", spec: "Photo failed to load: the profile icon shows, no message." },
        { state: "col", img: "photo-up-head.jpg", spec: "New photo uploading: a blue progress ring on the avatar; the camera badge hides until it finishes." },
        { state: "col", img: "id-few.jpg", spec: "One or two reviews: only the count, no average yet." },
        { state: "col", img: "id-pend.jpg", spec: "Licence still being checked: no badge, grey \"Në verifikim\" under the name." }
      ]},
      { name: "Tabs", note: "New. Profili and Vlerësimet with the review count.", frames: [
        { state: "min", img: "tabs-min.jpg", spec: "No reviews: the count reads 0 in grey." },
        { state: "col", img: "tabs-col.jpg", via: "First review", spec: "On load, Profili is open." },
        { state: "col", img: "tabs-v.jpg", spec: "Vlerësimet open. Tapping the rating line under the name opens this tab too." }
      ]},
      { name: "Profili tab", note: "The app's Specialiteti, Gjuhët and Licenca rows, plus Vendi i punës and Përvoja, then Bio. Labels sit above values so long values have room. Empty optional rows are hidden.", frames: [
        { state: "min", img: "about-min.jpg", spec: "Sign-up data only. The dashed Bio card opens the edit page." },
        { state: "col", img: "about-part.jpg", via: "Some fields added", spec: "Partial: languages added, still no bio or experience." },
        { state: "col", img: "about-full.jpg", spec: "Everything filled in." }
      ]},
      { name: "Licenca row on the profile", note: "The number always shows; the doctor sees the status only on their own profile.", frames: [
        { state: "col", img: "lic-ok.jpg", spec: "Valid: just the number." },
        { state: "col", img: "lic-soon.jpg", spec: "Expires within 30 days: amber \"Skadon më 15.12\"." },
        { state: "col", img: "lic-gone.jpg", spec: "Expired: pink \"Ka skaduar\"." }
      ]},
      { name: "Vlerësimet tab", note: "New. Parents rate a consultation after it ends. Read-only for the doctor: no replies, no filters, newest first.", frames: [
        { state: "min", img: "rev-min.jpg", spec: "No reviews yet. One quiet empty card." },
        { state: "col", img: "rev-one.jpg", via: "First review", spec: "One review: \"1 vlerësim\", singular, and no average: one rating is not a real average." },
        { state: "col", img: "rev-few.jpg", spec: "Two reviews: still no average. It appears from the third review." },
        { state: "col", img: "rev-sum.jpg", spec: "Many: average, stars, count and the 5 to 1 spread." },
        { state: "col", img: "rev-col.jpg", spec: "Long comment: cut at three lines with Më shumë." },
        { state: "exp", img: "rev-exp.jpg", via: "Tap Më shumë", spec: "Opens in place to the full text; Më pak closes it." },
        { state: "col", img: "rev-stars.jpg", spec: "Stars only: \"Vetëm vlerësim, pa koment\" in grey." },
        { state: "col", img: "rev-low.jpg", spec: "A low rating looks the same as any other. Parent shown by first name and initial only." },
        { state: "col", img: "rev-more.jpg", spec: "Ten reviews load at first; \"Shfaq 28 të tjera\" at the end loads the next ten." },
        { state: "sys", img: "rev-fail.jpg", spec: "Reviews failed to load: the shared one-row error replaces the tab content; the header and Profili tab still work." }
      ]},
      { name: "Ndrysho profilin", note: "Opened from Ndrysho, top right. Editable fields first; name, specialty and licence are changed by the clinical director, so they are locked.", frames: [
        { state: "det", img: "edit-full.jpg", page: true, title: "Opened", spec: "Fields filled with current data. Ruaj ndryshimet is grey until something changes." },
        { state: "det", img: "edit-dirty.jpg", page: true, title: "Changed", spec: "A field changed: blue border on the field in focus, button turns blue." },
        { state: "det", img: "edit-saving.jpg", page: true, title: "Saving", spec: "Button reads Duke ruajtur with a small spinner; tapping again does nothing." },
        { state: "det", img: "saved.jpg", page: true, via: "Saved", title: "Saved", spec: "Back on the profile with the new data and a short toast \"Ndryshimet u ruajtën\"." },
        { state: "sys", img: "edit-err.jpg", page: true, title: "Save failed", spec: "One amber row above the button with Provoni përsëri. The edits stay in the fields." },
        { state: "det", img: "edit-discard.jpg", page: true, title: "Back with unsaved changes", spec: "Bottom sheet: Vazhdoni redaktimin (light blue) or Anuloni ndryshimet (pink)." },
        { state: "sys", img: "val-page.jpg", page: true, title: "Invalid field", spec: "A field with an error turns pink with one line under it, and Ruaj ndryshimet stays grey until it is fixed." },
        { state: "sys", img: "val-bio.jpg", spec: "Bio over 300 characters: the counter turns pink." },
        { state: "sys", img: "val-years.jpg", spec: "Letters in Vite përvojë: \"Shkruani vetëm numra\". The keyboard is numeric, so this is rare." },
        { state: "sys", img: "val-work.jpg", spec: "Workplace and city come from sign-up and cannot be left empty." }
      ]},
      { name: "Fotoja e profilit", note: "New. Bottom sheet from the camera badge on the profile or the photo row on the edit page.", frames: [
        { state: "min", img: "path-4.jpg", page: true, spec: "No photo: camera and gallery only." },
        { state: "det", img: "photo-has.jpg", page: true, spec: "Has a photo: Hiqni foton added in pink. Removing it brings back the profile icon." },
        { state: "det", img: "photo-remove.jpg", page: true, via: "Tap Hiqni foton", title: "Confirm removal", spec: "One question before the photo goes: Hiqni foton (pink) or Anuloni." },
        { state: "det", img: "photo-up.jpg", page: true, title: "Uploading", spec: "After choosing a photo: progress ring on the avatar and \"Duke ngarkuar, 60%\". The doctor can keep editing." },
        { state: "sys", img: "photo-fail.jpg", spec: "Upload failed: amber line and Provoni përsëri. The old photo (or icon) stays." }
      ]},
      { name: "Profili i një mjeku tjetër", note: "New. A read-only bottom sheet, opened by tapping a doctor's name (consultation footer, a Kidocare diagnosis, Referimi). No Ndrysho, no ratings, no phone or email.", frames: [
        { state: "det", img: "dx-det-other.jpg", from: "kartela-mjekesore", page: true, title: "From a consultation", spec: "The footer names the other doctor. Tap the name." },
        { state: "det", img: "peer-other.jpg", via: "Tap the doctor's name", page: true, title: "Dr. Erion Dervishi", spec: "Photo or icon, name, verified badge, bio, then the same rows as the Profili tab, without the licence status." },
        { state: "min", img: "peer-min.jpg", page: true, title: "Sign-up data only", spec: "Specialty, workplace and licence. The sheet stays short." },
        { state: "col", img: "peer-long.jpg", page: true, title: "Long name and workplace", spec: "Name and workplace wrap; four languages wrap to a second line." },
        { state: "col", img: "peer-bio.jpg", page: true, title: "Long bio", spec: "Bio cut at three lines with Më shumë, so the sheet never covers the whole screen." },
        { state: "sys", img: "peer-gone.jpg", page: true, title: "Doctor no longer on Kidocare", spec: "Same layout as the shared \"profile no longer available\" state. Their consultations stay in the Kartela." }
      ]}
    ],
    rules: [
      ["Clinical director owns verified data", "Name, specialty and licence are changed by the clinical director, outside the app. The doctor edits only photo, bio, languages, workplace, city and experience."],
      ["Reviews are read-only", "No replies, no filters, newest first. Parents appear as first name and initial; a review never names the child or the diagnosis."],
      ["Verification", "A doctor whose licence is still being checked has no blue badge and shows \"Në verifikim\". Ratings appear from the third review."],
      ["Colleagues see less", "Another doctor sees who you are and where you work, never your ratings, your licence status or contact details."]
    ]
  },
  {
    id: "rezultati",
    name: "Rezultati",
    side: "doctor",
    date: "30.10.2026",
    purpose: "The result the doctor sends after a consultation. Every field lands in the Kartela consultation page and in the parent's view, under the same name.",
    path: {
      note: "Noa, first contact, an ear infection. A full screen, not an overlay. Noa has no chronic conditions, so the diagnosis list opens on common diagnoses. Required: Diagnoza, at least one step and at least one warning sign. Vlerësimi is optional and capped at 250 characters, so the result is carried by the steps and warning signs.",
      frames: [
        { state: "min", img: "path-1.jpg", page: true, title: "Rezultati, empty", spec: "Full screen, opens after the consultation ends. The parent's note is already there in grey and cannot be edited. Dërgo is grey." },
        { state: "sys", img: "path-2.jpg", page: true, via: "Tap Dërgo rezultatin", title: "Required fields missing", spec: "Scrolls to the first empty required field. Diagnoza, the first step row and the first warning sign row get a red outline and an exclamation mark, no text. Vlerësimi is never marked. The mark goes away when the field is tapped." },
        { state: "exp", img: "path-3.jpg", via: "Tap Diagnoza", title: "Diagnosis list", spec: "Opens under the field and pushes the form down. Four rows visible, the rest scroll inside the list." },
        { state: "exp", img: "path-4.jpg", via: "Type \"otit\"", title: "Search", spec: "Matches ignore accents and match inside names. Every result is already tagged Akute or Kronike. \"Shto\" keeps what was typed." },
        { state: "col", img: "path-5.jpg", page: true, via: "Pick Otit akut, add one step and one sign", title: "Ready to send", spec: "Diagnoza, one step and one warning sign: Dërgo turns blue. Vlerësimi here is a one-line summary (74/250)." },
        { state: "det", img: "path-6.jpg", via: "Tap + Ilaç", title: "Shto ilaç", spec: "Search the medicine, then how it is taken (optional)." },
        { state: "det", img: "path-7.jpg", via: "Close, tap + Analizë", title: "Shto analizë", spec: "One search field. Tapping a result adds it and closes the sheet." },
        { state: "det", img: "path-8.jpg", via: "Close, tap + Referim", title: "Shto referim", spec: "Search a doctor by name or specialty. The specialty comes from their profile." },
        { state: "det", img: "path-9.jpg", via: "Close, tap Shiko", page: true, title: "Preview", spec: "The result page exactly as the parent will get it, with only an X at the top. X returns to the form; Dërgo rezultatin sends it." }
      ]
    },
    screen: {
      note: "Noa before anything is filled in, and Anisa's asthma result with every section used. Full screen; the send bar stays pinned at the bottom on a solid strip.",
      frames: [
        { state: "min", img: "path-1.jpg", title: "Noa Leka", spec: "Empty form. Only the parent's note is filled." },
        { state: "full", img: "screen-full.jpg", title: "Anisa Marjeta Xhaferraj-Gjonbalaj", spec: "Every section filled: two medicines, two tests, a referral, four steps, five warning signs." }
      ]
    },
    components: [
      { name: "Header", note: "Who the result is for. Leaving the form in any way saves a draft; there is no confirmation sheet.", frames: [
        { state: "min", img: "head-min.jpg", spec: "Name, then age and consultation type on their own line. No separators." },
        { state: "col", img: "head-long.jpg", spec: "A long name wraps." },
        { state: "col", img: "head-draft.jpg", via: "Close with X, reopen", spec: "Reopened draft: a quiet chip with the time it was saved." }
      ]},
      { name: "Diagnoza", note: "One search field, no Akute/Kronike selector. The child's confirmed chronic conditions come first, then other diagnoses. The type is set by the diagnosis catalogue.", frames: [
        { state: "min", img: "dx-min.jpg", spec: "Empty." },
        { state: "exp", img: "dx-open-k.jpg", via: "Tap the field", spec: "Child with chronic conditions: Sëmundje kronike të konfirmuara first, then Diagnoza të tjera. Max four rows, the rest scroll." },
        { state: "exp", img: "dx-open-none.jpg", spec: "Child with none (Noa): only Diagnoza të tjera." },
        { state: "exp", img: "dx-q.jpg", via: "Type", spec: "\"astme\" finds Astmë: accents ignored, the match is highlighted, chronic matches stay on top." },
        { state: "exp", img: "dx-q-none.jpg", spec: "No match: only \"Shto\" with what was typed." },
        { state: "col", img: "dx-sel.jpg", via: "Pick a diagnosis", spec: "Chosen: the name, its tag, and X to search again." },
        { state: "col", img: "dx-selk.jpg", spec: "A chronic condition chosen: amber Kronike tag. The consultation is linked to it in the Kartela." },
        { state: "col", img: "dx-long.jpg", spec: "A long diagnosis wraps; the tag stays on the right." },
        { state: "sys", img: "dx-err.jpg", spec: "Missing when Dërgo is tapped: red outline and exclamation mark." }
      ]},
      { name: "Shënimi i prindit", note: "What the parent wrote when booking. Read-only: white box, no shadow, grey text. Hidden if the parent wrote nothing.", frames: [
        { state: "col", img: "note.jpg", spec: "Shown in full." },
        { state: "col", img: "note-long.jpg", spec: "A long note wraps; it is never cut." }
      ]},
      { name: "Vlerësimi", note: "Optional, at most 250 characters: a short clinical summary. It starts with the notes the doctor wrote during the video call (Shënime). What the parent has to do goes in Hapat and Kujdes nëse. Read by the parent and by every doctor who opens the Kartela.", frames: [
        { state: "min", img: "vl-min.jpg", spec: "Empty, no placeholder. The counter shows 0/250." },
        { state: "col", img: "vl-full.jpg", via: "Doctor writes", spec: "Grows with the text, three lines at most. The counter counts up in grey." },
        { state: "col", img: "vl-limit.jpg", spec: "At 250 the counter turns amber and typing stops. Pasted text is cut at 250. Never an error: it cannot block sending." }
      ]},
      { name: "Ilaçe, analiza, referime", note: "One card for all three. Rows have no X: tapping a row opens its sheet to change or remove it.", frames: [
        { state: "min", img: "it-min.jpg", spec: "Nothing added: just the three buttons." },
        { state: "col", img: "it-one.jpg", via: "Add one", spec: "One item." },
        { state: "col", img: "it-full.jpg", spec: "Medicines, then tests, then referrals, each in the order added." },
        { state: "col", img: "it-added.jpg", spec: "Just added: the row is tinted light blue for a moment." },
        { state: "col", img: "it-bare.jpg", spec: "Name only: a medicine with no instructions, a test, a referral outside Kidocare (no specialty)." },
        { state: "col", img: "it-long.jpg", spec: "Long names and instructions wrap." }
      ]},
      { name: "Shto ilaç", note: "Bottom sheet from + Ilaç. Only the medicine is required.", frames: [
        { state: "min", img: "med0.jpg", page: true, spec: "Opens with the cursor in the search." },
        { state: "exp", img: "med1.jpg", page: true, via: "Type", spec: "Suggestions with strength and form, plus \"Shto\" with what was typed." },
        { state: "exp", img: "medNo.jpg", page: true, spec: "Not in the list: only \"Shto\"." },
        { state: "col", img: "med2.jpg", page: true, via: "Pick", spec: "Chosen: Shto ilaçin is already blue; Si merret is optional." },
        { state: "col", img: "med3.jpg", page: true, spec: "With instructions." },
        { state: "det", img: "medEdit.jpg", page: true, via: "Tap an added medicine", spec: "Ndrysho ilaçin: same fields, Ruaj, and Hiqe ilaçin in pink." }
      ]},
      { name: "Shto analizë", note: "One field. Tapping a result adds the test and closes the sheet. No result field: the parent uploads the file later and it opens like any test in the Kartela.", frames: [
        { state: "min", img: "an0.jpg", page: true, spec: "Opens with the cursor in the search." },
        { state: "exp", img: "an1.jpg", page: true, via: "Type", spec: "Results, plus \"Shto\" with what was typed." },
        { state: "det", img: "anEdit.jpg", page: true, via: "Tap an added test", spec: "Change it (X searches again) or Hiqe analizën." }
      ]},
      { name: "Shto referim", note: "Only the doctor. Specialty and city come from their Kidocare profile. \"Shto\" refers to someone outside Kidocare, by name only.", frames: [
        { state: "min", img: "ref0.jpg", page: true, spec: "Opens with the cursor in the search." },
        { state: "exp", img: "ref1.jpg", page: true, via: "Type a name", spec: "Doctors matching the name." },
        { state: "exp", img: "refSpec.jpg", page: true, spec: "Typing a specialty lists every doctor with it." },
        { state: "det", img: "refEdit.jpg", page: true, via: "Tap an added referral", spec: "Change it or Hiqe referimin." }
      ]},
      { name: "Udhëzimet për prindin", note: "Hapat and Kujdes nëse are lists: one item per row, numbered as the parent sees them. Enter starts the next row; Enter on an empty row ends the list. Medicines are not repeated here; the parent sees them on their own.", frames: [
        { state: "min", img: "g-min.jpg", spec: "Empty: one placeholder row in each list." },
        { state: "exp", img: "g-typing.jpg", via: "Tap Shtoni një hap", spec: "The row being typed is tinted with a blue edge." },
        { state: "exp", img: "g-enter.jpg", via: "Enter", spec: "The step is saved and the next numbered row opens with the cursor in it." },
        { state: "col", img: "g-paste.jpg", spec: "Pasting several lines splits them into separate steps." },
        { state: "col", img: "g-one.jpg", spec: "One of each: a long step wraps." },
        { state: "col", img: "g-full.jpg", spec: "Full. X removes a row; the numbers update." },
        { state: "sys", img: "g-err.jpg", spec: "At least one step and one warning sign are required. When Dërgo is tapped with either list empty, its first row gets the red outline and mark." }
      ]},
      { name: "Prindi mund t'ju shkruajë edhe", note: "How long the parent can still write in the chat after the result.", frames: [
        { state: "col", img: "win.jpg", spec: "24 orë by default." },
        { state: "col", img: "win-72.jpg", spec: "Any other window, one tap." }
      ]},
      { name: "Send bar", note: "Pinned at the bottom, so the doctor never scrolls to send. Shiko opens the parent's view.", frames: [
        { state: "min", img: "dock-dis.jpg", spec: "Required fields missing (Diagnoza, one step, one warning sign): grey. Tapping it jumps to the first missing field." },
        { state: "col", img: "dock-on.jpg", spec: "Ready: blue." },
        { state: "col", img: "dock-sending.jpg", via: "Tap Dërgo", spec: "Duke dërguar with a spinner; tapping again does nothing." },
        { state: "sys", img: "dock-fail.jpg", page: true, spec: "Not sent: one amber row above the bar with Provoni përsëri. Nothing in the form is lost." }
      ]},
      { name: "The result page", note: "One page for everyone, in the standard Kartela consultation format. The doctor and the parent see exactly the same content; only the top button changes with where it was opened, and the parent also gets Hap bisedën. Sections with nothing in them are hidden.", frames: [
        { state: "det", img: "preview-full.jpg", page: true, via: "Tap Shiko", title: "Preview, from the form", spec: "Only an X at the top, back to the form. Shows Hap bisedën because that is what the parent will see." },
        { state: "min", img: "path-9.jpg", page: true, title: "Preview, minimal", spec: "A short Vlerësimi, one step and one warning sign." },
        { state: "full", img: "parent-full.jpg", page: true, via: "Sent", title: "Parent", spec: "Back to Konsultat. Hap bisedën opens the chat with the doctor; how long it stays open shows in the chat." },
        { state: "col", img: "parent-bare.jpg", page: true, title: "Parent, name-only medicine", spec: "A medicine with no instructions shows by name only." },
        { state: "full", img: "k-dx.jpg", page: true, title: "Doctor, in the Kartela", spec: "Back to Kartela mjekësore. Same content, no chat button. Tests show their status as the parent uploads them." }
      ]}
    ],
    rules: [
      ["One result page", "The form fills one page in the standard Kartela format. Doctor and parent see the same content; no second version is built. Only the top button and the parent's Hap bisedën change with context."],
      ["Same fields everywhere", "Diagnoza, Shënimi i prindit, Vlerësimi, Ilaçet, Analizat, Referimi, Hapat, Kujdes nëse: the same names in the form and on the page."],
      ["Required", "Diagnoza, at least one step and at least one warning sign. Dërgo jumps to the first missing one."],
      ["Short Vlerësimi", "Vlerësimi is optional and capped at 250 characters with a counter. The result is the steps and warning signs, not the clinical note."],
      ["Errors are red", "A cool red (#D94862 outline, #C8364F mark) means something is wrong. Pink stays for alerts that need attention, such as allergies and warning signs."],
      ["Drafts", "Closing or leaving the form always saves a draft. No discard sheet."],
      ["Full screen", "The form is a full screen, not an overlay, so its add sheets never stack on another sheet."],
      ["No manual formatting", "Lists are built row by row, so steps arrive numbered whatever the doctor types or pastes."]
    ]
  },
  {
    id: "gjendjet-e-sistemit",
    name: "Gjendjet e sistemit",
    side: "doctor",
    date: "29.10.2026",
    purpose: "Loading, no connection, errors and fallbacks, from the whole screen down to a single image. Designed once and reused by every functionality.",
    screen: {
      note: "Every screen uses these three. Only the title and the text change.",
      frames: [
        { state: "sys", img: "sys-loading.jpg", title: "Duke u ngarkuar", spec: "Grey shapes in the place of the real content. No spinner, no text." },
        { state: "sys", img: "sys-offline.jpg", title: "Pa lidhje", spec: "Icon, one line of explanation, one button to try again." }
      ]
    },
    components: [
      { name: "Errors", note: "Same layout as no connection, so the developer builds one component.", frames: [
        { state: "sys", img: "sys-error.jpg", page: true, title: "Screen did not open", spec: "Says it is our fault, not the doctor's. One button to try again." },
        { state: "sys", img: "test-det-err.jpg", page: true, title: "File did not open", spec: "Inside an overlay the error replaces only the file; the rest stays." }
      ]},
      { name: "One section fails", note: "The rest of the screen loads normally. Only the section that failed is replaced, in place, by one white row with a retry.", frames: [
        { state: "sys", img: "sys-sec-pf.jpg", title: "Profile section", spec: "\"Konsultat nuk u ngarkuan\" replaces the consultations button. Tap \"Provoni përsëri\" reloads only this section." },
        { state: "sys", img: "sys-sec-tab.jpg", title: "Kartela tab", spec: "The tab keeps its count if known; the list area shows the same row." }
      ]},
      { name: "Images fail", note: "No error message for images: the slot falls back quietly.", frames: [
        { state: "sys", img: "sys-thumb.jpg", title: "Test preview", spec: "A grey file icon with PDF or Foto replaces the preview. Tapping still opens the file overlay, which retries." },
        { state: "sys", img: "sys-avatar.jpg", title: "Avatar", spec: "If an uploaded photo fails to load, the animal assigned at sign-up shows instead (here the monkey)." }
      ]},
      { name: "Profile no longer available", note: "The parent deleted the child's profile, but an old chat still links to it.", frames: [
        { state: "sys", img: "sys-gone.jpg", page: true, title: "Profili nuk është më i disponueshëm", spec: "Same layout as the other errors. The button goes back to the chat; there is nothing to retry." }
      ]},
      { name: "Offline with saved data (for approval)", note: "Option for your boss: instead of the no-connection screen, show the last saved version when the doctor has opened this child before.", frames: [
        { state: "sys", img: "sys-cached.jpg", page: true, title: "Last saved version", spec: "Everything as last loaded, with one quiet chip under the title: \"Pa lidhje. Përditësuar më 14:20\". Files that were never opened show the image fallback." }
      ]}
    ],
    rules: [
      ["One pattern", "Loading is skeletons; no connection and errors are icon, title, one line, one button. Copy uses formal \"ju\" and never blames the doctor."],
      ["Smallest failure wins", "If one section fails, only that section shows an error. If an image fails, it falls back without a message. A full-screen error appears only when the whole screen cannot load."]
    ]
  }
];
