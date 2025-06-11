// List button logic
document.querySelectorAll('.listbttn').forEach(button => {
    button.addEventListener("click", openlist);
});

function openlist() {
    let id = this.id;

    if (document.getElementById("logic_content").classList.contains("show") && id !== "logic") {
        document.getElementById("logic_content").classList.toggle("show");
        document.getElementById("logic").classList.toggle("color");
    }
    if (document.getElementById("physics_content").classList.contains("show") && id !== "physics") {
        document.getElementById("physics_content").classList.toggle("show");
        document.getElementById("physics").classList.toggle("color");
    }
    if (document.getElementById("ethics_content").classList.contains("show") && id !== "ethics") {
        document.getElementById("ethics_content").classList.toggle("show");
        document.getElementById("ethics").classList.toggle("color");
    }

    let content = document.getElementById(id + "_content");
    content.classList.toggle("show");
    document.getElementById(id).classList.toggle("color");
}

// Popup logic
const popupOverlay = document.getElementById('popup-overlay');
const popupClose = document.getElementById('popup-close');
const popupWindow = document.getElementById('popUp');

// Open popup on card click
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function () {
        popupOverlay.classList.add('active');
        popUpContent(this.id);
    });
});

// Close popup on X click
popupClose.addEventListener('click', function() {
    popupOverlay.classList.remove('active');
});

// Close popup when clicking outside the window
popupOverlay.addEventListener('click', (e) => {
    if (e.target === popupOverlay) {
        popupOverlay.classList.remove('active');
    }
});

// Set popup content based on card id
function popUpContent(card_id) {
    let content = '';
    if (card_id === "epiktet") {
        content = 
        `
            <span class="popup-close" id="popup-close">&times;</span>
            <img src="epiktet_card.png" alt="Ephiktet" id="cardimg">
            <h2>Epiktet (55-135 n. Chr.)</h2>
            <h3>Hintergrund</h3>
            <p>Ehemaliger Sklave des römischen Freigelassenen Epaphroditus. Nach seiner Freilassung gründete er eine Philosophenschule in Nicopolis (Griechenland).</p>            
            <h3>Lehre</h3>
            <ul>
            <li>Fokus auf den „inneren Kontrollbereich“: Gedanken, Emotionen und Entscheidungen.</li>
            <li>Sein Werk <em>Enchiridion</em> (Handbuch) ist ein Mini-Leitfaden für Resilienz: „Wir sind nicht von Dingen beunruhigt, sondern von unseren Meinungen über sie“.</li>
            <li>Er lebte bescheiden - lief barfuß und schlief auf dem Boden - um Selbstbeherrschung zu üben.</li>
            </ul>              
            <h3>Anekdote</h3>
            <p>Als sein Herr ihn schlug, sagte Epiktet: „Wenn du noch einmal zuschlägst, wirst du mir den Arm brechen“ - ein Beispiel für Gelassenheit im Angesicht von Gewalt.</p>        
            <h3>Zitat</h3>
            <p class="zitat">„Die einzige wahre Freiheit ist die innere.“</p>
        `;
    } else if (card_id === "seneca") {
        content =
         `
            <span class="popup-close" id="popup-close">&times;</span>
            <img src="seneca_card.png" alt="Seneca" id="cardimg">
            <h2>Seneca (4 v. Chr.-65 n. Chr.)</h2>
            <h3>Hintergrund</h3>
            <p>Römischer Politiker, Dichter und Berater des Kaisers Nero. Trotz seines Reichtums (er investierte klug in Landwirtschaft und Bergbau) betonte er die Tugend der Armut.</p>
            
            <h3>Werke</h3>
            <ul>
            <li><em>Briefe an Lucilius</em>: Praktische Lebenshilfen, die bis heute modern wirken.</li>
            <li><em>Naturales quaestiones</em>: Eine Abhandlung über Naturphänomene aus stoischer Sicht.</li>
            </ul>
            
            <h3>Konflikte</h3>
            <p>Seneca wurde von Nero gezwungen, sich selbst zu töten, nachdem er in eine Verschwörung verstrickt war. Sein Tod wird als Symbol für die Schwierigkeit beschrieben, Stoizismus in der Politik zu leben.</p>
            
            <h3>Zitat</h3>
            <p class="zitat">„Es ist nicht, weil die Dinge schwer sind, dass wir sie nicht tun können; es ist, weil wir sie nicht tun können, dass sie schwer sind.“</p>
        `;
    } else if (card_id === "marc_aurel") {
        content =
         `
            <span class="popup-close" id="popup-close">&times;</span>
            <img src="marc_aurel_card.png" alt="Marc Aurel" id="cardimg">
            <h2>Marc Aurel (121-180 n. Chr.)</h2>
            <h3>Hintergrund</h3>
            <p>Römischer Kaiser und letzter der „fünf guten Kaiser“. Während er Kriege gegen Germanenstämme führte, schrieb er seine <em>Selbstbetrachtungen</em> im Krieglager.</p>
            
            <h3>Lehre</h3>
            <ul>
            <li>Der Mensch ist Teil eines größeren Ganzen (Kosmos) und sollte seine Pflichten ohne Klagen erfüllen.</li>
            <li>Seine <em>Selbstbetrachtungen</em> sind eine Mischung aus Tagebuch und philosophischem Essay über Sterblichkeit und Pflicht.</li>
            </ul>
            
            <h3>Kritik</h3>
            <p>Obwohl er Frieden predigte, führte er brutale Kriege. Zudem verfolgte er Christen, was im Widerspruch zu seiner humanistischen Philosophie stand.</p>
            
            <h3>Zitat</h3>
            <p class="zitat">„Denke nicht, du hättest das Leben verloren, sondern das, was du hattest, ist dir gegeben worden.“</p>
        `;
    } else if (card_id === "zenon") {
        content = 
        `
            <span class="popup-close" id="popup-close">&times;</span>
            <img src="zenon_card.png" alt="Zenon von Kition" id="cardimg">
            <h2>Zenon von Kition (ca. 334-262 v. Chr.)</h2>
            <h3>Hintergrund</h3>
            <p>Sohn eines wohlhabenden Kaufmanns aus Kition (Zypern). Nach einem Schiffbruch in Athen begann er, bei kynischen und platonischen Philosophen zu lernen. Später gründete er die Stoa am „Bemalten Säulengang“ (Stoa Poikile) in Athen.</p>
            
            <h3>Lehren</h3>
            <ul>
            <li>Tugend als einziger wahre Reichtum.</li>
            <li>„Lebe im Einklang mit der Natur“ - das bedeutet, sich an die rationale Ordnung des Kosmos (Logos) anzupassen.</li>
            <li>Sein Werk <em>Das Leben nach der Natur</em> war ein Manifest für Authentizität.</li>
            </ul>
            
            <h3>Tod</h3>
            <p>Zenon starb durch Selbstmord, indem er sich selbst entzog (vermutlich durch Hunger), als er alt und gebrechlich wurde. Dies galt als Ausdruck der „Würde“, löste aber auch Kritik aus.</p>
            
            <h3>Zitat</h3>
            <p class="zitat" class="zitat">„Lebe im Einklang mit der Natur.“</p>
        `;
    }
    popupWindow.innerHTML = content;

    // Re-attach close event after replacing innerHTML
    document.getElementById('popup-close').onclick = () => popupOverlay.classList.remove('active');
}