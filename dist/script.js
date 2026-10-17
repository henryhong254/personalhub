// Career chapters. Original photo proportions are preserved.
const milestones = [
 {year:'2016–2018',label:'BẮT ĐẦU TỪ GIÁO DỤC',name:"Awake Your Power & Nền tảng \"Thấu hiểu con người\"",description:"Bắt đầu sự nghiệp với vai trò **Marketing Leader** trong ngành đào tạo kỹ năng, mình nhận ra marketing không xuất phát từ công cụ hay số liệu kỹ thuật, mà bắt đầu từ **tâm lý học hành vi và sự chuyển hóa bên trong con người**.",details:["**Bài học:** Muốn truyền thông chạm tới đám đông, trước hết phải học cách **lắng nghe sâu sắc nỗi đau thực tế của từng cá nhân**.", "**Dịch chuyển Mindset:** Từ chạy theo thủ thuật, thuật toán sang đặt **sự thấu cảm và giá trị thực** làm gốc rễ cho nội dung."],images:[{src:'fpayp.png',alt:'Trang Facebook Awaken Your Power',caption:'Thời này xa quá, ảnh cũ thất lạc rồi — mượn chiếc fanpage để ôn lại kỷ niệm vậy 😄',width:1286,height:812}]},
 {year:'2019–2025',label:'THỰC THI & CỐ VẤN MARKETING',name:"Đồng hành cùng Startup & SME: Marketing gắn liền với Bài toán Kinh doanh",description:"Hơn 6 năm lăn lộn qua agency và cố vấn trực tiếp cho các nhà sáng lập từ bán lẻ cao cấp đến văn hóa, nghệ thuật, thực tế đã đập tan mọi công thức đóng khung. Marketing làm đẹp số liệu là vô nghĩa nếu không giải quyết được **bài toán dòng tiền và nguồn lực sống còn**.",details:["**Bài học:** Chiến lược hiệu quả nhất không phải chiến lược đồ sộ nhất, mà là chiến lược **vừa vặn nhất với năng lực vận hành của doanh nghiệp**.", "**Dịch chuyển Mindset:** Từ người làm truyền thông thuần túy sang **tư duy kinh doanh thực chiến (Business Mindset)**: Tiếp thị phải phục vụ trực tiếp cho **tăng trưởng và chuyển đổi**."],layout:'collage',images:[{src:'trungnguyen.jpg',alt:'Hồng Thiên Ý trong một dịp tại Trung Nguyên',caption:'Một dấu ấn trên hành trình làm nghề.',width:1536,height:2048},{src:'mad2.jpg',alt:'Hồng Thiên Ý trao đổi cùng đội ngũ trong quá trình làm việc',caption:'Những cuộc trao đổi phía sau mỗi dự án.',width:2048,height:1366},{src:'madame.jpg',alt:'Hồng Thiên Ý cùng đội ngũ Madame Show',caption:'Madame Show · 2024',width:1080,height:720},{src:'atum.jpg',alt:'Ảnh tập thể tại Atum Art Hub',caption:'Một khoảnh khắc tại Atum Art Hub.',width:2048,height:1365},{src:'atum2.jpg',alt:'Hồng Thiên Ý chia sẻ tại sự kiện Atum',caption:'Chia sẻ và kết nối tại Atum.',width:2048,height:1365}]},
 {year:'2026',label:'KINH DOANH CHUYÊN MÔN',name:"Bước qua ranh giới: Trở thành người làm kinh doanh thực thụ",description:"Sau 10 năm, mình chính thức trở thành 1 **người làm kinh doanh**, tự tay vận hành mô hình của riêng mình để **thấu hiểu trọn vẹn áp lực của một Founder**. Từ vị thế đó, mình mang trọn bộ năng lực tích lũy suốt một thập kỷ để giúp nhiều người kinh doanh thành công hơn, đặc biệt là trong mảng **kinh doanh chuyên môn và giáo dục đào tạo**.",details:["**Bài học:** Giỏi chuyên môn là điều kiện cần; biết **đóng gói, thương mại hóa và vận hành tinh gọn** mới là điều kiện đủ để tự do.", "**Dịch chuyển Mindset:** Từ **“người làm dịch vụ/cố vấn bên ngoài”** sang **“người làm kinh doanh thực chiến”**: Đồng hành bằng góc nhìn của **một Founder giải bài toán cho các Founders**."],images:[{src:'solo.jpg',alt:'Hồng Thiên Ý tham gia sự kiện cùng cộng đồng solo năm 2026',caption:'Gặp gỡ và kết nối tại một sự kiện cộng đồng solo · 2026.',width:2048,height:1536},{src:'coaching.jpg',alt:'Hồng Thiên Ý trong một buổi coaching',caption:'Đồng hành qua Coaching 1:1.',width:1080,height:1920},{src:'teaching.jpg',alt:'Hồng Thiên Ý hướng dẫn học viên thực hành tại lớp',caption:'Một buổi hướng dẫn thực hành cùng học viên khóa trước.',width:1920,height:1080}]}
];
const logoStrip=document.querySelector('.experience-strip');
const logoToggle=document.querySelector('.logo-motion-toggle');
logoToggle.addEventListener('click',()=>{
 const paused=logoStrip.classList.toggle('is-paused');
 logoToggle.setAttribute('aria-pressed',String(paused));
 logoToggle.setAttribute('aria-label',paused?'Tiếp tục chuyển động logo':'Tạm dừng chuyển động logo');
 logoToggle.querySelector('.motion-label').textContent=paused?'Tiếp tục':'Tạm dừng';
 logoToggle.firstElementChild.textContent=paused?'▷':'Ⅱ';
});
const timeline=document.querySelector('#timeline');
const element=(tag,className,text)=>{const el=document.createElement(tag);if(className)el.className=className;if(text)el.textContent=text;return el};
// Render only the editorial bold markers; all copy remains plain text.
const emphasized=(tag,className,text)=>{const el=element(tag,className);text.split(/(\*\*.*?\*\*)/g).forEach(part=>{el.append(part.startsWith('**')&&part.endsWith('**')?element('strong','',part.slice(2,-2)):document.createTextNode(part))});return el};
milestones.forEach((item,index)=>{
 const article=element('article','career-chapter '+(item.images.length?'has-photos':'text-only')+(item.layout?' chapter-'+item.layout:''));
 const copy=element('div','chapter-copy');
 copy.append(element('span','chapter-index','CHẶNG '+String(index+1).padStart(2,'0')),element('span','small-label',item.label),element('h3','',item.name));
 if(item.description)copy.append(emphasized('p','',item.description));
 if(item.details){const list=element('ul','chapter-details');item.details.forEach(detail=>list.append(emphasized('li','',detail)));copy.append(list)}
 article.append(element('div','chapter-year',item.year),copy);
 const gallery=element('div','chapter-gallery planned-gallery');
 if(index===0)gallery.classList.add('single-archive');
 const slots=index===0?item.images:index===1?[item.images[1],item.images[3],item.images[4],item.images[0],item.images[2]]:item.images;
 slots.forEach((photo,i)=>{const figure=element('figure',i===0?'photo-main':'photo-support');if(photo.placeholder){figure.classList.add('photo-placeholder');figure.append(element('span','slot-number',String(i+1).padStart(2,'0')),element('strong','',photo.placeholder),element('span','slot-format',photo.format))}else{const img=element('img');img.src='assets/work/'+photo.src;img.alt=photo.alt;img.loading='lazy';img.width=photo.width;img.height=photo.height;img.style.objectPosition=photo.src==='coaching.jpg'?'50% 64%':'50% 50%';figure.append(img,element('figcaption','',photo.caption))}gallery.append(figure)});
 if(index===1||index===2)buildProjectSlider(gallery,slots,item.name);
 article.append(gallery);
 timeline.append(article);
});




// Two editorial photo ribbons for interests, using supplied personal photos.
const interestRows=[
 [['bienvasach.jpg','Đọc sách bên biển','50% 65%'],['hagiang.jpg','Những chuyến đi · Hà Giang','50% 60%'],['meovawork.jpg','Một người bạn nhỏ','50% 65%'],['lanbien.jpg','Khám phá dưới mặt nước','50% 65%']],
 [['dalat.jpg','Một khoảng lặng ở Đà Lạt','50% 55%'],['thac.jpg','Gần hơn với thiên nhiên','50% 55%'],['sach2.jpg','Sách và một góc quen','50% 60%'],['ninhbinh.jpg','Đi và khám phá · Ninh Bình','50% 55%']]
];
const interests=document.querySelector('#interests');
interestRows.forEach((photos,index)=>{const window=element('div','interest-window');const track=element('div','interest-track'+(index?' reverse':''));for(let duplicate=0;duplicate<2;duplicate++){const group=element('div','interest-group');if(duplicate)group.setAttribute('aria-hidden','true');photos.forEach(([src,caption,position])=>{const figure=element('figure','interest-photo');const image=element('img');image.src='assets/interests/'+src;image.alt=duplicate?'':caption;image.loading='lazy';image.style.objectPosition=position;figure.append(image,element('figcaption','',caption));group.append(figure)});track.append(group)}window.append(track);interests.append(window)});
const interestToggle=document.querySelector('.interest-toggle');
interestToggle?.addEventListener('click',()=>{const paused=interests.classList.toggle('is-paused');interestToggle.setAttribute('aria-pressed',String(paused));interestToggle.textContent=paused?'Tiếp tục chuyển động':'Tạm dừng chuyển động'});

// Titles follow the linked posts; the untitled coaching post uses an editorial heading.
const featuredPosts=[
 {id:'pfbid0eUo7FhQNpHXmTeCz66E8T3NZshvpvUXSfZ4Y8j9V2HDGK8WhaZSevNkW1vZNcuLXl',tag:'AI · GÓC NHÌN',title:'Bong bóng vỡ AI là gì? Và chúng ta cần làm gì?',summary:'Trả AI về vai trò hỗ trợ hiệu suất, giữ trải nghiệm thật và niềm tin giữa người với người làm nền tảng.'},
 {id:'pfbid02Ck7R3eRiGazCHwQ4vj8t1VAhZw7qHf9nhSnpp9k23BwP6VFzt5AmDPqCdZixqNyAl',tag:'AI · SÁNG TẠO',title:'Vì sao mình ít khi dùng AI để viết content?',summary:'Giá trị của việc tự suy nghĩ, phản tư và giữ kết nối với sản phẩm mình tạo ra.'},
 {id:'pfbid02CuipjUqsxyfFFEp6BbmV4jiXNd2XSoHHWNR27aZV7998UTXNwumVhepBkDSZKSNwl',tag:'MARKETING · XÂY KÊNH',title:'Vì sao càng làm nội dung chăm chỉ, follower càng “âm thầm” rời đi?',summary:'Ba yếu tố để xây kênh: chuyên môn, cá tính và nhu cầu thực tế của người đọc.'},
 {id:'pfbid02vE1YEREkFU7kXK1ktbwMTwAsyeEristUfzThAYML4J3i6ZyJXFazhHQpzbCLXaVBl',tag:'AI · LANDING PAGE',title:'“Gõ búa đúng chỗ”: tư duy đứng sau một landing page tốt',summary:'Từ một buổi coaching: vì sao câu lệnh ngắn vẫn hiệu quả khi nền tảng marketing đã rõ ràng?'},
 {id:'pfbid0gU1hYkHi5z3naDTmTk4yVQwJspnfhA6qh7otA8guMfZvUbaUMoLVbjzz1kqoAyj3l',tag:'MARKETING · WEBSITE',title:'Đừng vội xây website nếu bạn không tìm ra lý do khiến khách hàng ghé thăm mỗi ngày!',summary:'Từ một nơi trưng bày thông tin đến một điểm hẹn mang lại giá trị cho khách hàng.'},
 {id:'pfbid0eYj92zaGEeivtXzHvDaw5BCD3ctHUUh8tmYH6KuBDwfpDaAhihUiKkekf37hcU37l',tag:'AI · HIỆU SUẤT',title:'Cảnh báo! Bạn đang bận rộn một cách vô lý',summary:'Tách quá trình sáng tạo thành các bước rõ ràng để dành thời gian cho nội dung và khách hàng.'},
 {id:'pfbid02TF2eeBtLiKmarZbNDaAZnmvXRTcQEPzPfJfPoQdfdGpRF8tU4u36jUtf7DhZVwKRl',tag:'MARKETING · CHECKLIST',title:'Checklist 14 việc biến profile Facebook thành landing page cá nhân',summary:'Bốn chặng rà soát: dòng thời gian, cài đặt, nhận diện và nội dung dẫn đến chuyển đổi.'}
];
featuredPosts.forEach((post,index)=>{const link=element('a','article-card'+(index===0?' article-featured':''));link.href='https://www.facebook.com/thienyhong254/posts/'+post.id;link.target='_blank';link.rel='noopener noreferrer';const meta=element('div','article-meta');meta.append(element('span','',post.tag),element('span','article-number',String(index+1).padStart(2,'0')));link.append(meta,element('h3','',post.title),element('p','',post.summary));const footer=element('span','article-read','Đọc trên Facebook');const arrow=element('span','','↗');arrow.setAttribute('aria-hidden','true');footer.append(arrow);link.append(footer);document.querySelector('#articles-grid').append(link)});


// Native modal keeps focus within the album and restores it to its opener.
const photoDialog=element('dialog','photo-dialog');
photoDialog.setAttribute('aria-label','Album hành trình làm nghề');
const dialogClose=element('button','photo-dialog-close','✕');dialogClose.type='button';dialogClose.setAttribute('aria-label','Đóng album');
const dialogImage=element('img','photo-dialog-image');
const dialogCaption=element('p','photo-dialog-caption');
const dialogCount=element('span','photo-dialog-count');dialogCount.setAttribute('aria-live','polite');
const previousPhoto=element('button','photo-dialog-prev','←');previousPhoto.type='button';previousPhoto.setAttribute('aria-label','Ảnh trước');
const nextPhoto=element('button','photo-dialog-next','→');nextPhoto.type='button';nextPhoto.setAttribute('aria-label','Ảnh tiếp theo');
const dialogControls=element('div','photo-dialog-controls');dialogControls.append(previousPhoto,dialogCount,nextPhoto);
photoDialog.append(dialogClose,dialogImage,dialogCaption,dialogControls);document.body.append(photoDialog);
let albumPhotos=[],albumIndex=0,albumOpener=null,previousOverflow='';
function renderProjectPhoto(){const photo=albumPhotos[albumIndex];dialogImage.src='assets/work/'+photo.src;dialogImage.alt=photo.alt;dialogCaption.textContent=photo.caption;dialogCount.textContent=(albumIndex+1)+' / '+albumPhotos.length;}
function openProjectAlbum(photos,index){albumPhotos=photos;albumIndex=index;albumOpener=document.activeElement;renderProjectPhoto();previousOverflow=document.body.style.overflow;document.body.style.overflow='hidden';photoDialog.showModal();dialogClose.focus();}
function moveProjectPhoto(step){albumIndex=(albumIndex+step+albumPhotos.length)%albumPhotos.length;renderProjectPhoto();}
dialogClose.addEventListener('click',()=>photoDialog.close());
previousPhoto.addEventListener('click',()=>moveProjectPhoto(-1));nextPhoto.addEventListener('click',()=>moveProjectPhoto(1));
photoDialog.addEventListener('keydown',event=>{if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();moveProjectPhoto(event.key==='ArrowLeft'?-1:1)}});
photoDialog.addEventListener('click',event=>{if(event.target===photoDialog)photoDialog.close()});
photoDialog.addEventListener('close',()=>{document.body.style.overflow=previousOverflow;albumOpener?.focus({preventScroll:true})});

function buildProjectSlider(gallery,photos,title){
 gallery.style.setProperty("--preview-count",photos.length);
 gallery.replaceChildren();gallery.classList.add('project-slider');
 gallery.setAttribute('aria-label','Album '+title);
 const stage=element('div','project-stage');
 const slides=photos.map((photo,i)=>{const slide=element('button','project-slide');slide.type='button';slide.setAttribute('aria-label','Phóng lớn: '+photo.alt);slide.setAttribute('aria-haspopup','dialog');
 const img=element('img');img.src='assets/work/'+photo.src;img.alt=photo.alt;img.width=photo.width;img.height=photo.height;img.loading='lazy';
 slide.append(img,element('span','project-caption',photo.caption));slide.addEventListener('click',()=>openProjectAlbum(photos,i));stage.append(slide);return slide});
 const hint=element('span','project-zoom','↗ Phóng lớn');stage.append(hint);
 const prev=element('button','project-arrow project-prev','‹'),next=element('button','project-arrow project-next','›');
 prev.type=next.type='button';prev.setAttribute('aria-label','Xem ảnh trước');next.setAttribute('aria-label','Xem ảnh kế tiếp');stage.append(prev,next);
 const rail=element('div','project-thumbnails');rail.setAttribute('aria-label','Chọn ảnh để xem');
 const thumbs=photos.map((photo,i)=>{const button=element('button','project-thumb');button.type='button';button.setAttribute('aria-label','Xem ảnh '+(i+1)+': '+photo.alt);const img=element('img');img.src='assets/work/'+photo.src;img.alt='';img.loading='lazy';button.append(img);button.addEventListener('click',()=>{show(i);restart()});rail.append(button);return button});
 const footer=element('div','project-slider-footer'),count=element('span','project-slide-count'),pause=element('button','project-pause');pause.type='button';footer.append(count,pause);gallery.append(stage,rail,footer);
 let current=0,paused=window.matchMedia('(prefers-reduced-motion: reduce)').matches,timer;
 function show(index){current=(index+photos.length)%photos.length;slides.forEach((slide,i)=>{slide.classList.toggle('is-active',i===current);slide.inert=i!==current;slide.setAttribute('aria-hidden',String(i!==current));thumbs[i].setAttribute('aria-pressed',String(i===current))});count.textContent=(current+1)+' / '+photos.length;}
 function restart(){clearInterval(timer);timer=setInterval(()=>{if(!paused&&!document.hidden&&!gallery.matches(':hover')&&!gallery.contains(document.activeElement)&&!document.querySelector('.photo-dialog[open]'))show(current+1)},3000)}
 function updatePause(){pause.textContent=paused?'▶ Tiếp tục':'Ⅱ Tạm dừng';pause.setAttribute('aria-label',paused?'Tiếp tục chuyển ảnh tự động':'Tạm dừng chuyển ảnh tự động');pause.setAttribute('aria-pressed',String(paused))}
 prev.addEventListener('click',()=>{show(current-1);restart()});next.addEventListener('click',()=>{show(current+1);restart()});pause.addEventListener('click',()=>{paused=!paused;updatePause();restart()});
 show(0);updatePause();restart();
}
