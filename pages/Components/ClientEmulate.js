import React, {useState, useEffect} from 'react'
import styles from '../../styles/Home.module.css'
import adminStyles from '../../styles/Admin.module.css'
import songStyles from '../../styles/Song.module.css'

import TextareaAutosize from 'react-textarea-autosize';

const siteNameTemporary = 'localhost:3000'

const fakeData = [
            
    {
        artistNamesongNamedatefileVersion1: {
            date: 'some date1',
            downloadURL: 'https://firebasestorage.googleapis.com/v0/b/xktransfer-30d93.appspot.com/o/masters%2FNoita-Fool-For-You-dy-23032021.mp3?alt=media&token=9f4f54fc-498d-488e-b335-cd75cee4ac61',
            fileNameRegexed: 'artistName-songName-date',
            songName: 'World On Fire',
            revisionNote: `Viral edison bulb raw denim craft beer Brooklyn. Austin glossier shaman, master cleanse art party live-edge stumptown. Scenester hammock plaid post-ironic. Literally man bun waistcoat 3 wolf moon direct trade flexitarian vape four dollar toast gochujang yuccie intelligentsia mukbang artisan quinoa. Drinking vinegar church-key lo-fi bushwick freegan brunch seitan polaroid pickled.`
        },
        artistNamesongNamedatefileVersion2: {
            date: 'some date2',
            downloadURL: 'https://firebasestorage.googleapis.com/v0/b/xktransfer-30d93.appspot.com/o/masters%2FNoita-Fool-For-You-dy-23032021.mp3?alt=media&token=9f4f54fc-498d-488e-b335-cd75cee4ac61',
            fileNameRegexed: 'artistName-songName-date',
            songName: 'BTFU',
            revisionNote: `Brooklyn shabby chic put a bird on it, tumeric beard chambray tumblr dreamcatcher skateboard mukbang hoodie selvage austin. Bespoke chia actually pabst polaroid. Before they sold out man braid vape cold-pressed farm-to-table fixie JOMO intelligentsia. Chartreuse letterpress four loko meh literally, PBR&B celiac slow-carb kinfolk echo park freegan shoreditch meditation. VHS blog shoreditch lyft. Mustache godard kogi vice aesthetic, meh fingerstache kombucha etsy art party crucifix. Vegan ennui before they sold out blog post-ironic bespoke, edison bulb same mumblecore skateboard cornhole cronut neutra freegan letterpress.`
        },
        artistNamesongNamedatefileVersion3: {
            date: 'some date3',
            downloadURL: 'https://firebasestorage.googleapis.com/v0/b/xktransfer-30d93.appspot.com/o/masters%2FNoita-Fool-For-You-dy-23032021.mp3?alt=media&token=9f4f54fc-498d-488e-b335-cd75cee4ac61',
            fileNameRegexed: 'artistName-songName-date',
            songName: 'Stay Behind',
            revisionNote: `Enamel pin actually pickled chartreuse cold-pressed knausgaard readymade iPhone hashtag meggings master cleanse. Godard copper mug artisan put a bird on it. Lomo XOXO small batch, snackwave put a bird on it tattooed offal scenester before they sold out iceland twee ennui marfa umami street art. Af green juice lyft chicharrones chartreuse art party affogato kickstarter whatever irony flannel bitters. Hell of lo-fi godard sus, blog bushwick letterpress XOXO next level locavore gochujang. Drinking vinegar heirloom vinyl gochujang.`
        }
    },
    {
        artistNamesongNamedatefileVersion1: {
            date: 'some date4',
            downloadURL: 'https://firebasestorage.googleapis.com/v0/b/xktransfer-30d93.appspot.com/o/masters%2FNoita-Fool-For-You-dy-23032021.mp3?alt=media&token=9f4f54fc-498d-488e-b335-cd75cee4ac61',
            fileNameRegexed: 'artistName-songName-date',
            songName: 'MORE THAN HUMAN',
            revisionNote: `Food truck waistcoat marfa raw denim mlkshk authentic gatekeep succulents. Vice fingerstache squid flannel. Praxis swag la croix retro scenester thundercats fam actually chia. Banh mi franzen four dollar toast food truck forage authentic trust fund fixie everyday carry. Vice plaid XOXO aesthetic. Tumeric selfies green juice yr, tilde kinfolk 3 wolf moon. Art party church-key plaid jianbing banh mi paleo venmo pop-up ethical four dollar toast kitsch.`
        },
        artistNamesongNamedatefileVersion2: {
            date: 'some date5',
            downloadURL: 'https://firebasestorage.googleapis.com/v0/b/xktransfer-30d93.appspot.com/o/masters%2FNoita-Fool-For-You-dy-23032021.mp3?alt=media&token=9f4f54fc-498d-488e-b335-cd75cee4ac61',
            fileNameRegexed: 'artistName-songName-date',
            songName: 'Close Eyes',
            revisionNote: `YOLO shabby chic pinterest truffaut man bun. Bruh godard lomo put a bird on it DIY kinfolk sartorial actually fit. Mukbang single-origin coffee health goth, kinfolk yuccie chartreuse celiac you probably haven't heard of them thundercats pinterest swag organic poutine sriracha. Shabby chic tacos banh mi, semiotics gentrify literally kickstarter disrupt bitters enamel pin polaroid ethical food truck next level. Godard meggings cardigan mukbang post-ironic live-edge. IPhone hell of chicharrones, semiotics bodega boys tumeric chia austin fanny pack jean shorts brunch synth microdosing locavore.`
        },
        artistNamesongNamedatefileVersion3: {
            date: 'some date6',
            downloadURL: 'https://firebasestorage.googleapis.com/v0/b/xktransfer-30d93.appspot.com/o/masters%2FNoita-Fool-For-You-dy-23032021.mp3?alt=media&token=9f4f54fc-498d-488e-b335-cd75cee4ac61',
            fileNameRegexed: 'artistName-songName-date',
            songName: 'ETR',
            revisionNote: `Gluten-free Brooklyn portland small batch, DIY seitan blog vibecession snackwave etsy vice wayfarers normcore kickstarter. Organic 90's single-origin coffee, tumeric occupy enamel pin kogi glossier truffaut helvetica tumblr VHS. Semiotics enamel pin authentic, 3 wolf moon gluten-free meditation raclette cardigan literally banjo messenger bag. Subway tile tbh lomo iceland. Freegan ennui lo-fi messenger bag yes plz twee 3 wolf moon green juice. Lo-fi try-hard fam yuccie DIY vice bitters skateboard pop-up poutine gochujang schlitz. Cornhole vaporware banh mi small batch activated charcoal intelligentsia PBR&B keffiyeh food truck 90's palo santo flexitarian celiac health goth af.`
        }
    },
    {
        artistNamesongNamedatefileVersion1: {
            date: 'some date7',
            downloadURL: 'https://firebasestorage.googleapis.com/v0/b/xktransfer-30d93.appspot.com/o/masters%2FNoita-Fool-For-You-dy-23032021.mp3?alt=media&token=9f4f54fc-498d-488e-b335-cd75cee4ac61',
            fileNameRegexed: 'artistName-songName-date',
            songName: 'Awaken',
            revisionNote: `Godard listicle tacos bodega boys VHS unicorn heirloom deep v locavore jean shorts distillery echo park. Vaporware chillwave messenger bag 90's activated charcoal ugh street art disrupt migas schlitz. Live-edge green juice air plant pok pok hot chicken health goth master cleanse beard banjo. Craft beer woke succulents everyday carry hella, literally chartreuse kitsch snackwave fixie vice artisan. Actually hammock neutra, direct trade four dollar toast flannel selvage typewriter meh JOMO celiac fingerstache drinking vinegar. Keffiyeh kale chips marfa cardigan. Pok pok franzen flannel, celiac pork belly fam pitchfork brunch air plant la croix heirloom subway tile crucifix ethical.`
        },
        artistNamesongNamedatefileVersion2: {
            date: 'some date8',
            downloadURL: 'https://firebasestorage.googleapis.com/v0/b/xktransfer-30d93.appspot.com/o/masters%2FNoita-Fool-For-You-dy-23032021.mp3?alt=media&token=9f4f54fc-498d-488e-b335-cd75cee4ac61',
            fileNameRegexed: 'artistName-songName-date',
            songName: 'Figure',
            revisionNote: `Umami hammock taxidermy chambray man braid mumblecore deep v lomo letterpress flannel readymade photo booth fit neutra williamsburg. Helvetica you probably haven't heard of them mumblecore flexitarian fingerstache heirloom subway tile glossier pitchfork lyft selfies lo-fi vinyl try-hard vibecession. Readymade meh migas pinterest mukbang tonx bitters af mlkshk next level JOMO letterpress. Scenester lomo deep v franzen tilde fit squid mlkshk venmo la croix bruh sustainable cronut tofu farm-to-table. JOMO synth cornhole vice drinking vinegar wolf edison bulb helvetica flannel glossier iPhone crucifix. Palo santo trust fund chartreuse, deep v live-edge tbh butcher chicharrones glossier shabby chic mustache you probably haven't heard of them synth. Gentrify tofu pickled, flannel four dollar toast copper mug drinking vinegar microdosing pitchfork cronut hell of art party health goth.`
        },
        artistNamesongNamedatefileVersion3: {
            date: 'some date9',
            downloadURL: 'https://firebasestorage.googleapis.com/v0/b/xktransfer-30d93.appspot.com/o/masters%2FNoita-Fool-For-You-dy-23032021.mp3?alt=media&token=9f4f54fc-498d-488e-b335-cd75cee4ac61',
            fileNameRegexed: 'artistName-songName-date',
            songName: 'The Pain From You',
            revisionNote: `Four dollar toast sartorial meggings tattooed, marfa raw denim cloud bread cray normcore lumbersexual tote bag everyday carry. Neutra readymade four loko art party vaporware lo-fi. Vegan keffiyeh heirloom, chartreuse paleo blog polaroid photo booth kitsch vice cliche selvage. Church-key beard crucifix normcore big mood. Glossier authentic 8-bit man braid ugh freegan crucifix copper mug occupy cardigan wolf. Authentic four loko normcore gentrify umami pork belly VHS jean shorts, vape photo booth keffiyeh.`
        }
    },
]

export default function ClientEmulate(props) {

    const [clientSongs, setClientSongs] = useState(fakeData)

    const saveRevisionNotes = (event) => {
        event.preventDefault()
        alert(`Changes for ${event.target[4].value} have not been saved to the database because this is fake data!`)
    }

    const shortenShareUrl = async (songData) => {
        navigator.clipboard.writeText(siteNameTemporary + '/Components/' + songData.songName + '?foo=' + encodeURIComponent(songData.revisionNote) + 'xxxxxxxxxx' + songData.fileNameRegexed + 'xxxxxxxxxx' + songData.downloadURL)
    }
   
  return (
    <main >
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
            <details>
            <summary style={{cursor: 'pointer', color: 'black'}}>about this 'emulation' page</summary>
                <h3 className={adminStyles.fakeTextHeader}>This is what a logged in client would see, but this is all fake data and the buttons won't make database reads or writes.</h3>
            </details>
        </div>
        <section>
            <ul className={adminStyles.clientClient}>
                {
                    clientSongs &&
                    clientSongs.map((song, index1) => { // for each song
                        return (
                            <ul key={index1} style={{listStyle: 'none', padding: '0px', display:'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
                                {Object.values(song).map((songDataValue) => // for each file version
                                    <ul key={songDataValue.date} className={songStyles.fileVersionClient}>
                                        <li className={songStyles.songName} style={{cursor: 'default'}}>{songDataValue.songName} <button className={songStyles.songDeleteButtonClient}><a target="_blank" href={songDataValue.downloadURL} >DOWNLOAD</a></button></li>
                                        <li className={songStyles.filename} style={{cursor: 'default'}}>{songDataValue.fileNameRegexed}</li>
                                        {/* <audio controls src={songDataValue.downloadURL} className={songStyles.audioWithSpace}/> */}
                                        <audio controls src='fake url' className={songStyles.audioWithSpace}/>
                                        <br />
                                        <form onSubmit={saveRevisionNotes}>
                                            <input readOnly={true} value={songDataValue.date} style={{display: 'none'}}></input>
                                            <input readOnly={true} value={songDataValue.downloadURL} style={{display: 'none'}}></input>
                                            <input readOnly={true} value={songDataValue.fileNameRegexed} style={{display: 'none'}}></input>
                                            <TextareaAutosize 
                                                defaultValue={songDataValue.revisionNote}
                                                className={styles.revisionTextArea}
                                                // onChange={(e) => handleTyping(e.target.value, song)} 
                                            />
                                            <br />
                                            <input readOnly={true} value={songDataValue.songName} style={{display: 'none'}}></input>
                                            <button className={songStyles.cleanButton}>save changes</button>
                                            <button 
                                                type="button" 
                                                className={songStyles.songDeleteButtonClient} 
                                                onClick={() => shortenShareUrl(songDataValue)}>
                                                    copy link
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M5.25 17.188q-.521 0-.885-.365Q4 16.458 4 15.938V5.771h1v10.167q0 .083.083.166.084.084.167.084h8.208v1Zm2.417-2.417q-.521 0-.886-.365-.364-.364-.364-.885V4.167q0-.521.364-.886.365-.364.886-.364h7.395q.542 0 .907.364.364.365.364.886v9.354q0 .521-.364.885-.365.365-.907.365Zm0-1h7.395q.105 0 .188-.083.083-.084.083-.167V4.167q0-.105-.083-.177-.083-.073-.188-.073H7.667q-.084 0-.167.073-.083.072-.083.177v9.354q0 .083.083.167.083.083.167.083Zm-.25 0V3.917v9.854Z"/></svg> 
                                                </button>
                                        </form>
                                    </ul>
                                )}
                            </ul>
                        )
                    })
                }
            </ul>
        </section>
    </main>
  )
}
