import React, {useState, useEffect} from 'react'
import styles from '../../styles/Home.module.css'
import adminStyles from '../../styles/Admin.module.css'
import songStyles from '../../styles/Song.module.css'
import Image from 'next/image';

const fakeData = [
    {
        displayName: "Dylan King",
        email: "contact@fakeemail.com",
        photoURL: 'https://lh3.googleusercontent.com/a-/AFdZucqQ6ZlopecV3GYA95ouqR7HYrJ6Z5d8KChaQoOn3g=s96-c',
        uid: 'jnkjsnfkjsndfgkjsdngksdjfn',
        uidWithoutNumberAtTheStart: 'clientjnkjsnfkjsndfgkjsdngksdjfn',
        songs: [
            
                {
                    artistNamesongNamedatefileVersion1: {
                        date: 'some date',
                        downloadURL: 'https://firebasestorage.googleapis.com/v0/b/xktransfer-30d93.appspot.com/o/masters%2FNoita-Fool-For-You-dy-23032021.mp3?alt=media&token=9f4f54fc-498d-488e-b335-cd75cee4ac61',
                        fileNameRegexed: 'artistName-songName-date',
                        songName: 'Into Pieces',
                        revisionNote: `Disrupt trust fund truffaut church-key whatever schlitz letterpress migas. Mumblecore squid drinking vinegar, wolf church-key chillwave +1. Godard four loko celiac hell of intelligentsia helvetica. Farm-to-table bicycle rights vegan bitters jianbing seitan hashtag quinoa intelligentsia.`
                    },
                    artistNamesongNamedatefileVersion2: {
                        date: 'some date',
                        downloadURL: 'https://firebasestorage.googleapis.com/v0/b/xktransfer-30d93.appspot.com/o/masters%2FNoita-Fool-For-You-dy-23032021.mp3?alt=media&token=9f4f54fc-498d-488e-b335-cd75cee4ac61',
                        fileNameRegexed: 'artistName-songName-date',
                        songName: 'You Should Run',
                        revisionNote: `Locavore banjo fingerstache meh mlkshk pok pok. Pickled big mood church-key raclette lumbersexual. Austin literally portland vice, skateboard lomo stumptown man braid chia fanny pack Brooklyn. Leggings slow-carb snackwave gochujang. Drinking vinegar big mood lomo mlkshk, neutra forage four dollar toast crucifix semiotics.`
                    },
                    artistNamesongNamedatefileVersion3: {
                        date: 'some date',
                        downloadURL: 'https://firebasestorage.googleapis.com/v0/b/xktransfer-30d93.appspot.com/o/masters%2FNoita-Fool-For-You-dy-23032021.mp3?alt=media&token=9f4f54fc-498d-488e-b335-cd75cee4ac61',
                        fileNameRegexed: 'artistName-songName-date',
                        songName: 'Hypnotized',
                        revisionNote: `Synth williamsburg +1 Brooklyn tousled humblebrag meditation. Forage hashtag coloring book green juice praxis letterpress pok pok pork belly. Gentrify humblebrag marfa, DIY PBR&B kombucha cloud bread vice shabby chic neutra you probably haven't heard of them actually roof party activated charcoal vinyl. Keffiyeh readymade drinking vinegar twee meh pok pok flannel. Waistcoat iceland readymade glossier, everyday carry fanny pack you probably haven't heard of them cronut.`
                    }
                },
                {
                    artistNamesongNamedatefileVersion1: {
                        date: 'some date',
                        downloadURL: 'https://firebasestorage.googleapis.com/v0/b/xktransfer-30d93.appspot.com/o/masters%2FNoita-Fool-For-You-dy-23032021.mp3?alt=media&token=9f4f54fc-498d-488e-b335-cd75cee4ac61',
                        fileNameRegexed: 'artistName-songName-date',
                        songName: 'Waiting Here For You',
                        revisionNote: `JOMO retro man bun letterpress woke actually organic mlkshk big mood. Occupy tilde small batch you probably haven't heard of them church-key woke. Man bun crucifix actually, tilde artisan four dollar toast hammock ramps shaman freegan. Occupy drinking vinegar four loko, banh mi squid intelligentsia food truck jean shorts la croix typewriter unicorn tacos cred iceland.`
                    },
                    artistNamesongNamedatefileVersion2: {
                        date: 'some date',
                        downloadURL: 'https://firebasestorage.googleapis.com/v0/b/xktransfer-30d93.appspot.com/o/masters%2FNoita-Fool-For-You-dy-23032021.mp3?alt=media&token=9f4f54fc-498d-488e-b335-cd75cee4ac61',
                        fileNameRegexed: 'artistName-songName-date',
                        songName: 'Complicated',
                        revisionNote: `Ethical fam cred letterpress lyft semiotics plaid yr live-edge quinoa trust fund try-hard gluten-free. Narwhal tonx poutine franzen jianbing. Subway tile venmo blue bottle, flexitarian vape cardigan bicycle rights distillery marfa aesthetic post-ironic selvage man bun vegan succulents. Flexitarian 8-bit actually, next level activated charcoal bushwick pabst +1 echo park helvetica. 3 wolf moon fashion axe woke biodiesel.`
                    },
                    artistNamesongNamedatefileVersion3: {
                        date: 'some date',
                        downloadURL: 'https://firebasestorage.googleapis.com/v0/b/xktransfer-30d93.appspot.com/o/masters%2FNoita-Fool-For-You-dy-23032021.mp3?alt=media&token=9f4f54fc-498d-488e-b335-cd75cee4ac61',
                        fileNameRegexed: 'artistName-songName-date',
                        songName: 'Heroes Of Today',
                        revisionNote: `Unicorn synth microdosing man braid VHS, locavore echo park pug hell of subway tile. Messenger bag knausgaard banh mi XOXO. Stumptown lomo shoreditch intelligentsia, fanny pack waistcoat subway tile tilde flannel chicharrones locavore keffiyeh truffaut small batch. Blue bottle actually kombucha skateboard. Four loko marfa copper mug tbh. Food truck swag wayfarers wolf, banh mi offal tote bag trust fund big mood XOXO seitan YOLO meditation tofu. Narwhal XOXO woke, hexagon fixie sartorial iPhone shoreditch air plant readymade street art.`
                    }
                },
                {
                    artistNamesongNamedatefileVersion1: {
                        date: 'some date',
                        downloadURL: 'https://firebasestorage.googleapis.com/v0/b/xktransfer-30d93.appspot.com/o/masters%2FNoita-Fool-For-You-dy-23032021.mp3?alt=media&token=9f4f54fc-498d-488e-b335-cd75cee4ac61',
                        fileNameRegexed: 'artistName-songName-date',
                        songName: 'Devotion',
                        revisionNote: `Poutine helvetica keytar ennui. Listicle blue bottle mumblecore deep v flexitarian, pork belly big mood scenester brunch crucifix mixtape bushwick. Pug tonx cliche kickstarter. Bespoke listicle knausgaard butcher church-key austin poke +1 craft beer la croix flannel sustainable. Occupy pok pok ramps, williamsburg salvia next level blue bottle letterpress affogato JOMO butcher banjo. Bespoke pok pok portland meggings praxis vape biodiesel waistcoat microdosing woke williamsburg blog forage. Disrupt pug fingerstache post-ironic, coloring book ennui direct trade fit ascot 3 wolf moon bitters distillery lyft sriracha.`
                    },
                    artistNamesongNamedatefileVersion2: {
                        date: 'some date',
                        downloadURL: 'https://firebasestorage.googleapis.com/v0/b/xktransfer-30d93.appspot.com/o/masters%2FNoita-Fool-For-You-dy-23032021.mp3?alt=media&token=9f4f54fc-498d-488e-b335-cd75cee4ac61',
                        fileNameRegexed: 'artistName-songName-date',
                        songName: 'Dashstar',
                        revisionNote: `Stumptown try-hard lomo vinyl hell of salvia swag DIY. Tumblr meh mumblecore af jianbing artisan mlkshk butcher celiac VHS truffaut. Art party lo-fi activated charcoal leggings. Chicharrones lyft shoreditch 90's food truck taxidermy, banjo same kale chips +1 direct trade mukbang. Chartreuse truffaut cloud bread cred polaroid. Keffiyeh vice offal DIY yr snackwave YOLO etsy iceland Brooklyn VHS before they sold out next level.`
                    },
                    artistNamesongNamedatefileVersion3: {
                        date: 'some date',
                        downloadURL: 'https://firebasestorage.googleapis.com/v0/b/xktransfer-30d93.appspot.com/o/masters%2FNoita-Fool-For-You-dy-23032021.mp3?alt=media&token=9f4f54fc-498d-488e-b335-cd75cee4ac61',
                        fileNameRegexed: 'artistName-songName-date',
                        songName: 'Blaze',
                        revisionNote: `Art party wolf forage portland deep v quinoa gluten-free poke. Mumblecore etsy vibecession pinterest williamsburg flexitarian lyft banh mi marfa fashion axe selfies trust fund. Swag williamsburg hashtag YOLO, ramps pour-over taiyaki try-hard austin kale chips plaid hexagon la croix. Thundercats palo santo vegan sustainable man bun meggings, keffiyeh single-origin coffee gentrify. Taiyaki etsy tbh, iPhone next level bicycle rights intelligentsia.`
                    }
                },
        ],


    },
    {
        displayName: "Fake Person",
        email: "contact@fakeemail.com",
        photoURL: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
        uid: 'erjnrjrrnjkjsndfgkjsdngksdjfn',
        uidWithoutNumberAtTheStart: 'clientaIULEEDBJHfgkjsdngksdjfn',
        songs: [
            
            {
                artistNamesongNamedatefileVersion1: {
                    date: 'some date',
                    downloadURL: 'https://firebasestorage.googleapis.com/v0/b/xktransfer-30d93.appspot.com/o/masters%2FNoita-Fool-For-You-dy-23032021.mp3?alt=media&token=9f4f54fc-498d-488e-b335-cd75cee4ac61',
                    fileNameRegexed: 'artistName-songName-date',
                    songName: 'World On Fire',
                    revisionNote: `Viral edison bulb raw denim craft beer Brooklyn. Austin glossier shaman, master cleanse art party live-edge stumptown. Scenester hammock plaid post-ironic. Literally man bun waistcoat 3 wolf moon direct trade flexitarian vape four dollar toast gochujang yuccie intelligentsia mukbang artisan quinoa. Drinking vinegar church-key lo-fi bushwick freegan brunch seitan polaroid pickled.`
                },
                artistNamesongNamedatefileVersion2: {
                    date: 'some date',
                    downloadURL: 'https://firebasestorage.googleapis.com/v0/b/xktransfer-30d93.appspot.com/o/masters%2FNoita-Fool-For-You-dy-23032021.mp3?alt=media&token=9f4f54fc-498d-488e-b335-cd75cee4ac61',
                    fileNameRegexed: 'artistName-songName-date',
                    songName: 'BTFU',
                    revisionNote: `Brooklyn shabby chic put a bird on it, tumeric beard chambray tumblr dreamcatcher skateboard mukbang hoodie selvage austin. Bespoke chia actually pabst polaroid. Before they sold out man braid vape cold-pressed farm-to-table fixie JOMO intelligentsia. Chartreuse letterpress four loko meh literally, PBR&B celiac slow-carb kinfolk echo park freegan shoreditch meditation. VHS blog shoreditch lyft. Mustache godard kogi vice aesthetic, meh fingerstache kombucha etsy art party crucifix. Vegan ennui before they sold out blog post-ironic bespoke, edison bulb same mumblecore skateboard cornhole cronut neutra freegan letterpress.`
                },
                artistNamesongNamedatefileVersion3: {
                    date: 'some date',
                    downloadURL: 'https://firebasestorage.googleapis.com/v0/b/xktransfer-30d93.appspot.com/o/masters%2FNoita-Fool-For-You-dy-23032021.mp3?alt=media&token=9f4f54fc-498d-488e-b335-cd75cee4ac61',
                    fileNameRegexed: 'artistName-songName-date',
                    songName: 'Stay Behind',
                    revisionNote: `Enamel pin actually pickled chartreuse cold-pressed knausgaard readymade iPhone hashtag meggings master cleanse. Godard copper mug artisan put a bird on it. Lomo XOXO small batch, snackwave put a bird on it tattooed offal scenester before they sold out iceland twee ennui marfa umami street art. Af green juice lyft chicharrones chartreuse art party affogato kickstarter whatever irony flannel bitters. Hell of lo-fi godard sus, blog bushwick letterpress XOXO next level locavore gochujang. Drinking vinegar heirloom vinyl gochujang.`
                }
            },
            {
                artistNamesongNamedatefileVersion1: {
                    date: 'some date',
                    downloadURL: 'https://firebasestorage.googleapis.com/v0/b/xktransfer-30d93.appspot.com/o/masters%2FNoita-Fool-For-You-dy-23032021.mp3?alt=media&token=9f4f54fc-498d-488e-b335-cd75cee4ac61',
                    fileNameRegexed: 'artistName-songName-date',
                    songName: 'MORE THAN HUMAN',
                    revisionNote: `Food truck waistcoat marfa raw denim mlkshk authentic gatekeep succulents. Vice fingerstache squid flannel. Praxis swag la croix retro scenester thundercats fam actually chia. Banh mi franzen four dollar toast food truck forage authentic trust fund fixie everyday carry. Vice plaid XOXO aesthetic. Tumeric selfies green juice yr, tilde kinfolk 3 wolf moon. Art party church-key plaid jianbing banh mi paleo venmo pop-up ethical four dollar toast kitsch.`
                },
                artistNamesongNamedatefileVersion2: {
                    date: 'some date',
                    downloadURL: 'https://firebasestorage.googleapis.com/v0/b/xktransfer-30d93.appspot.com/o/masters%2FNoita-Fool-For-You-dy-23032021.mp3?alt=media&token=9f4f54fc-498d-488e-b335-cd75cee4ac61',
                    fileNameRegexed: 'artistName-songName-date',
                    songName: 'Close Eyes',
                    revisionNote: `YOLO shabby chic pinterest truffaut man bun. Bruh godard lomo put a bird on it DIY kinfolk sartorial actually fit. Mukbang single-origin coffee health goth, kinfolk yuccie chartreuse celiac you probably haven't heard of them thundercats pinterest swag organic poutine sriracha. Shabby chic tacos banh mi, semiotics gentrify literally kickstarter disrupt bitters enamel pin polaroid ethical food truck next level. Godard meggings cardigan mukbang post-ironic live-edge. IPhone hell of chicharrones, semiotics bodega boys tumeric chia austin fanny pack jean shorts brunch synth microdosing locavore.`
                },
                artistNamesongNamedatefileVersion3: {
                    date: 'some date',
                    downloadURL: 'https://firebasestorage.googleapis.com/v0/b/xktransfer-30d93.appspot.com/o/masters%2FNoita-Fool-For-You-dy-23032021.mp3?alt=media&token=9f4f54fc-498d-488e-b335-cd75cee4ac61',
                    fileNameRegexed: 'artistName-songName-date',
                    songName: 'ETR',
                    revisionNote: `Gluten-free Brooklyn portland small batch, DIY seitan blog vibecession snackwave etsy vice wayfarers normcore kickstarter. Organic 90's single-origin coffee, tumeric occupy enamel pin kogi glossier truffaut helvetica tumblr VHS. Semiotics enamel pin authentic, 3 wolf moon gluten-free meditation raclette cardigan literally banjo messenger bag. Subway tile tbh lomo iceland. Freegan ennui lo-fi messenger bag yes plz twee 3 wolf moon green juice. Lo-fi try-hard fam yuccie DIY vice bitters skateboard pop-up poutine gochujang schlitz. Cornhole vaporware banh mi small batch activated charcoal intelligentsia PBR&B keffiyeh food truck 90's palo santo flexitarian celiac health goth af.`
                }
            },
            {
                artistNamesongNamedatefileVersion1: {
                    date: 'some date',
                    downloadURL: 'https://firebasestorage.googleapis.com/v0/b/xktransfer-30d93.appspot.com/o/masters%2FNoita-Fool-For-You-dy-23032021.mp3?alt=media&token=9f4f54fc-498d-488e-b335-cd75cee4ac61',
                    fileNameRegexed: 'artistName-songName-date',
                    songName: 'Awaken',
                    revisionNote: `Godard listicle tacos bodega boys VHS unicorn heirloom deep v locavore jean shorts distillery echo park. Vaporware chillwave messenger bag 90's activated charcoal ugh street art disrupt migas schlitz. Live-edge green juice air plant pok pok hot chicken health goth master cleanse beard banjo. Craft beer woke succulents everyday carry hella, literally chartreuse kitsch snackwave fixie vice artisan. Actually hammock neutra, direct trade four dollar toast flannel selvage typewriter meh JOMO celiac fingerstache drinking vinegar. Keffiyeh kale chips marfa cardigan. Pok pok franzen flannel, celiac pork belly fam pitchfork brunch air plant la croix heirloom subway tile crucifix ethical.`
                },
                artistNamesongNamedatefileVersion2: {
                    date: 'some date',
                    downloadURL: 'https://firebasestorage.googleapis.com/v0/b/xktransfer-30d93.appspot.com/o/masters%2FNoita-Fool-For-You-dy-23032021.mp3?alt=media&token=9f4f54fc-498d-488e-b335-cd75cee4ac61',
                    fileNameRegexed: 'artistName-songName-date',
                    songName: 'Figure',
                    revisionNote: `Umami hammock taxidermy chambray man braid mumblecore deep v lomo letterpress flannel readymade photo booth fit neutra williamsburg. Helvetica you probably haven't heard of them mumblecore flexitarian fingerstache heirloom subway tile glossier pitchfork lyft selfies lo-fi vinyl try-hard vibecession. Readymade meh migas pinterest mukbang tonx bitters af mlkshk next level JOMO letterpress. Scenester lomo deep v franzen tilde fit squid mlkshk venmo la croix bruh sustainable cronut tofu farm-to-table. JOMO synth cornhole vice drinking vinegar wolf edison bulb helvetica flannel glossier iPhone crucifix. Palo santo trust fund chartreuse, deep v live-edge tbh butcher chicharrones glossier shabby chic mustache you probably haven't heard of them synth. Gentrify tofu pickled, flannel four dollar toast copper mug drinking vinegar microdosing pitchfork cronut hell of art party health goth.`
                },
                artistNamesongNamedatefileVersion3: {
                    date: 'some date',
                    downloadURL: 'https://firebasestorage.googleapis.com/v0/b/xktransfer-30d93.appspot.com/o/masters%2FNoita-Fool-For-You-dy-23032021.mp3?alt=media&token=9f4f54fc-498d-488e-b335-cd75cee4ac61',
                    fileNameRegexed: 'artistName-songName-date',
                    songName: 'The Pain From You',
                    revisionNote: `Four dollar toast sartorial meggings tattooed, marfa raw denim cloud bread cray normcore lumbersexual tote bag everyday carry. Neutra readymade four loko art party vaporware lo-fi. Vegan keffiyeh heirloom, chartreuse paleo blog polaroid photo booth kitsch vice cliche selvage. Church-key beard crucifix normcore big mood. Glossier authentic 8-bit man braid ugh freegan crucifix copper mug occupy cardigan wolf. Authentic four loko normcore gentrify umami pork belly VHS jean shorts, vape photo booth keffiyeh.`
                }
            },
    ],
        

    },
]

function AdminEmulate() {

  const [clientList, setClientList] = useState(['Dylan King', 'Fake Person'])
  const [clientListArray, setClientListArray] = useState(fakeData)
  const [songSelected, setSongSelected] = useState('')

  const [fileUpload, setFileUpload] = useState(null) // this gets set to a file
  const [fileUrl, setFileUrl] = useState(null)

  const fileInputOnChange = (event) => {
    setFileUpload(event.target.files[0])
  }

  return ( 
    <div className={adminStyles.admin}>
        <details>
            <summary style={{cursor: 'pointer'}}>about this 'emulation' page</summary>
            <h3 className={adminStyles.fakeTextHeader}>This page uses fake data, and the upload and delete buttons won't actually uplaod and delete anything.</h3>
            <h2 className={adminStyles.fakeTextHeader}>The actual app uses a firebase backend for everything and I'm pretty proud of it. You can check out the code for that in the Admin, Auth, Client components.</h2>
            <h3 className={adminStyles.fakeTextHeader}>I created this app to use with the people who I work on music/audio with,</h3>
            <h3 className={adminStyles.fakeTextHeader}>but wanted to create this page to show anybody who's curious or evaluating me what it looks like if you were to be authorized.</h3>
            <h3 className={adminStyles.fakeTextHeader}>Basically just lets me upload files to other people, where they can then make revision notes and I can get an overview of everything.</h3>
            <h3 className={adminStyles.fakeTextHeader}>I learned a lot while making this. I wanted to create this beta/v1 first before entirely redoing it because I knew I'd learn so much in the process that I'd know how to do it better from scratch.</h3>
            <h3 className={adminStyles.fakeTextHeader}>I'm working on a full 'platform' to collaborate on audio/music with people, but I'm building out each part on its own first to understand more of what I'll want/need in the 'full' one</h3>
            <h3 className={adminStyles.fakeTextHeader}>Anyways if you're here that's cool. Not much to see. Hire me and put me to work tho lol I'd make a great junior, I just don't have a degree.</h3>
            <h3 className={adminStyles.fakeTextHeader}>srsly email me</h3>
        </details>
        
        <h6 className={adminStyles.fakeTextHeader}>btw i made the song that's loaded into each audio file</h6>
        <br />
      <form className={adminStyles.adminForm}>
        <div className={adminStyles.selectFileContainer}>
          <label htmlFor='fileSelectionButton' className={adminStyles.adminFormButton}>Select File</label>
          <input id='fileSelectionButton' type="file" style={{display: 'none'}} onChange={(event) => {fileInputOnChange(event)}}/>
          <p className={adminStyles.fileSelectedName}>{fileUpload ? fileUpload.name : ""}</p>
        </div>
        <input type='text' defaultValue={songSelected}/>
        <select>
          {clientList.map((client) => {
            return (
              <option key={client}>{client}</option>
              )
            })}
        </select>
        <button className={adminStyles.adminFormButtonUpload}>upload file</button>
      </form>

      <ul className={styles.list}>
        {clientListArray &&
          clientListArray.map((x) => {
            return (
              <ul key={x.uid} className={adminStyles.client}>
                <li className={adminStyles.clientInfoCard}>
                  {<Image 
                  key={x.uid}
                  src={x.photoURL} 
                  // className={styles.userIcon}
                  alt="User Photo" 
                  width={'100%'} 
                  height={'100%'} 
                  style={{
                    overflow:'hidden',
                    borderRadius: '50%',
                    borderStyle: 'solid',
                    borderWidth: '2px',
                    borderColor: 'rgb(255, 255, 255)'
                  }}
                  /> }
                  <section className={adminStyles.clientInfo}>
                    {x.displayName}
                    <br />
                    <p className={adminStyles.clientInfoCardEmail}>{x.email}</p>
                  </section>
                </li>

                <ul className={songStyles.songList}>
                  {x.songs.map((song, index) => <ul key={x.uid + index} className={songStyles.fileListItem}>
                    {Object.keys(song).map((songData, index) => <ul key={index} className={songStyles.fileVersion} onClick={() => setSongSelected(song[songData].songName)}>
                      <li className={songStyles.songName}>{song[songData].songName} <button className={songStyles.songDeleteButton}>delete</button> </li>
                      {/* <li>{songData}</li> */}
                      <li className={songStyles.filename}>{song[songData].fileNameRaw}</li>
                      <br />
                      <li className={songStyles.revisionNote}>{song[songData].revisionNote}</li>
                      <br />
                      {/* <li><audio className={styles.audio} key={song[songData].getDownloadURL} controls src={song[songData].downloadURL}></audio></li> */}
                      <li><audio className={styles.audio} key={song[songData].getDownloadURL} controls src='fake url'></audio></li>
                    </ul>)}
                  </ul>)}
                </ul>
              </ul>
            )
          })
        }
      </ul>
    
    </div>
  )
}

export default AdminEmulate