import './App.css';
import { useState } from 'react';
import telegram from './images/telegram.svg';
import discord from './images/discord.svg';
import instagram from './images/instagram.svg';
import tiktok from './images/tiktok.svg';
import twitter from './images/twitter.svg';
import youtube from './images/youtube.svg';
import payment_pic from './images/payments-pic.png';
import fees from './images/fees.svg'
import payouts from './images/payouts.svg'
import crypto from './images/crypto.svg'
import gateways from './images/gateways.svg'

import { Link, animateScroll as scroll } from 'react-scroll';

function App() {
  const [activeTab, setActiveTab] = useState('');
  const handleTabHover = (tab) => {
    setActiveTab(tab);
    if (tab === 'general') {
      let questions = [
        'هل يمكنني شراء جيفت كارد بالعملات المشفرة؟',
        'هل تدعم المنصة العديد من اللغات؟',
        'هل كل العملات المشفرة مدعومة؟',
        'منطقتي غير مدعومة',
        'أريد مسح بياناتي',
      ];
      let answers = [
        'نعم ، يمكنك شراء جيفت كارد بالعملات المشفرة على نظامنا',
        'نعم ، و لكنك تستطيع التواصل مع الدعم ان لم تجد لغتك على المنصة',
        'ليست كل العملات المشفره مدعومه و لكننا سنضيف الباقي مغ الوقت',
        'منصتنا خاصة بالمناطق المحدوده, و لكن يمكنك التواصل مع الدعم لترى إن كان بالإمكان دعم منطفتك',
        'الرجاء التواصل مع الدعم بخصوص هذا',
      ];
      let n = document.getElementsByClassName('text-wrapper-36').length;
      for (let i = 0; i < n; i++) {
        document.getElementsByClassName('text-wrapper-36')[i].innerHTML = questions[i];
      }
      for (let i = 0; i < n; i++) {
        document.getElementsByClassName('text-wrapper-37')[i].innerHTML = answers[i];
      }
      document.getElementsByClassName('overlap-10')[0].style.display = 'flex';
      if (document.getElementsByClassName('vector-2')[4].src.split('-')[2].includes('3')) document.getElementById('answer5').style.display = 'none';
      else document.getElementById('answer5').style.display = 'block';
    }
    if (tab === 'transactions') {
      let questions = [
        'كيف يمكنني الإيداع في حسابي؟',
        // 'I made multiple deposit but its showing only once',
        'لقد فمت بالإيداع أكثر من مرة و لكنها تظهر مرة واحدة فقط',
        // 'Deposit not showing in my wallet?',
        'الإيداع غير ظاهر في محفظتي',
        // "I didn't use my own bank account",
        'لم أستخدم حسابي البنكي الخاص',
        // 'I need help with payment methods',
        'أحتاج المساعدة بخصوص وسائل الدفع',
      ];
      let answers = [
        // 'You can make use of direct bank transfer if available for your region or the payment gateway available in the system.'
        'يمكنك استخدام النقل البنكي المباشر إن كان متاحا في منطقتك أو بوابة الدفع المتاحة في النظام',
        // 'If changes do not reflect after a while, please contact our support for assistance'
        'إن لم تظهر التغييرات خلال فترة زمنية وجيزة, فالرجاء التواصل مع الدعم للمساعدة',
        // 'If changes do not reflect after a while, please contact our support for assistance'
        'إن لم تظهر التغييرات خلال فترة زمنية وجيزة, فالرجاء التواصل مع الدعم للمساعدة',
        // 'You can change your desired bank account at any time!'
        'يمكنك تغيير حسابك البنكي في أي وقت',
        // 'For assistance, please make use of the Get support button in the system or through the contact form below!'
        'الرجاء التواصل مع الدعم',
      ];
      let n = document.getElementsByClassName('text-wrapper-36').length;
      for (let i = 0; i < n; i++) {
        document.getElementsByClassName('text-wrapper-36')[i].innerHTML = questions[i];
      }
      for (let i = 0; i < n; i++) {
        document.getElementsByClassName('text-wrapper-37')[i].innerHTML = answers[i];
      }
      document.getElementsByClassName('overlap-10')[0].style.display = 'flex';
      if (document.getElementsByClassName('vector-2')[4].src.split('-')[2].includes('3')) document.getElementById('answer5').style.display = 'none';
      else document.getElementById('answer5').style.display = 'block';
    }
    if (tab === 'accounts') {
      let questions = [
        // 'How do I set up my account?'
        'كيف يمكنني إنشاء حسابي؟',
        // 'How do I close down my account?'
        'كيف يمكنني إغلاق حسابي؟',
        // 'My account is locked'
        'لقد تم إغلاق حسابي',
        // 'How can I change verified personal details?'
        'كيف يمكنني تغيير المعلومات الشخصية التي تم التحقق منها؟',
        // 'How can i change my preferred language?'
        'كيف يمكنني تغيير اللغة المفضلة؟',
      ];
      let answers = [
        // 'You get started with by registering an account with us and completing your kyc verification'
        'يمكنك فعل ذلك عن طريق تسجيل حساب معنا و إكمال التحقق الخاص بمعلومات العميل',
        // 'Contact our support as regards getting your account deleted'
        'الرجاء التواصل مع الدعم لمسح الحساب الخاص بك',
        // 'If your account is disabled, we have noticed strange activities on your account. Contact our support on how to resolve this issue'
        'إذا تم تعطيل حسابك, فقد لاحظنا بعض الأنشطة الغريبة على حسابك. الرجاء التواصل مع الدعم لحل المشكلة',
        // 'Contact out support to change verified documents'
        'الرجاء التواصل مع الدعم لتغيير الوثائق التي تم التحقق منها سابقاََ',
        // "You'll find a selection panel to change to available locales on the home page!"
        'ستجد لوحة تغيير اللغة في الصفحة الرئيسية',
      ];
      let n = document.getElementsByClassName('text-wrapper-36').length;
      for (let i = 0; i < n; i++) {
        document.getElementsByClassName('text-wrapper-36')[i].innerHTML = questions[i];
      }
      for (let i = 0; i < n; i++) {
        document.getElementsByClassName('text-wrapper-37')[i].innerHTML = answers[i];
      }
      document.getElementsByClassName('overlap-10')[0].style.display = 'flex';
      if (document.getElementsByClassName('vector-2')[4].src.split('-')[2].includes('3')) document.getElementById('answer5').style.display = 'none';
      else document.getElementById('answer5').style.display = 'block';
    }
    if (tab === 'security') {
      let questions = [
        // 'Is Cryptitan regulated ?'
        'هل سكوار مرخص؟',
        // 'How secure is my transactions?',
        'ما مدى أمان معاملاتي؟',
        // 'How can I reset my account password?'
        'كيف يمكنني تغيير كلمة المرور الخاصة بحسابي؟',
        // 'How can I report a fraudulent transaction?'
        'كيف يمكنني الإبلاغ عن معاملة احتيالية',
      ];
      let answers = [
        // 'Yes, cryptitan is regulated!'
        'نعم, سكوار مرخص',
        'لقد اتخذنا الكثير من الاحتياطات الأمنية لضمان حماية نظامنا من جميع أنواع التهديدات الأمنية من داخل وخارج النظام',
        'يمكنك إعادة تعيين كلمة المرور الخاصة بك في علامة التبويب "الأمان" ضمن "إعدادات الحساب"!',
        'اتصل بالدعم الخاص بنا باستخدام زر الحصول على الدعم في النظام أو نموذج الاتصال أدناه للإبلاغ عن نشاط احتيالي',
      ];
      let n = document.getElementsByClassName('text-wrapper-36').length;
      for (let i = 0; i < n; i++) {
        document.getElementsByClassName('text-wrapper-36')[i].innerHTML = questions[i];
      }
      for (let i = 0; i < n; i++) {
        document.getElementsByClassName('text-wrapper-37')[i].innerHTML = answers[i];
      }
      document.getElementsByClassName('overlap-10')[0].style.display = 'none';
      if (document.getElementsByClassName('vector-2')[4].src.split('-')[2].includes('3')) document.getElementById('answer5').style.display = 'none';
      else document.getElementById('answer5').style.display = 'block';
    }
  };

  function toggle(q) {
    let on = document.getElementsByClassName('vector-2')[q - 1].src.split('-')[2].includes('3');
    if (on)
      document.getElementsByClassName('vector-2')[q - 1].src =
        'https://generation-sessions.s3.amazonaws.com/68256b5f2a1d9b9301bcccbe95faad19/img/vector-4.svg';
    else
      document.getElementsByClassName('vector-2')[q - 1].src =
        'https://generation-sessions.s3.amazonaws.com/68256b5f2a1d9b9301bcccbe95faad19/img/vector-3.svg';
    let shown = document.getElementById('answer' + q).style.display;
    if (shown != 'none') document.getElementById('answer' + q).style.display = 'none';
    else document.getElementById('answer' + q).style.display = 'block';
  }
  return (
    <div className='home-sekoir'>
      <div className='div'>
        {/* page 1 */}
        <div id='home' className='overlap-group'>
          <div className='top-bar'>
            <svg className='img' xmlns='http://www.w3.org/2000/svg' width='93' height='30' viewBox='0 0 93 30' fill='none'>
              <path
                d='M73.2527 17.5543L87.1362 3.6685C82.2448 -1.22283 74.3179 -1.22283 69.4266 3.6685L68.1871 4.90805C69.4147 4.82924 70.6542 5.02269 71.8126 5.49081C72.8037 5.89205 73.7328 6.4963 74.5329 7.2964L75.7366 8.50013L77.4467 6.79007V11.55H72.6867L74.3967 9.83999L73.193 8.63625C72.2639 7.70719 71.1247 7.1316 69.9258 6.89755C68.7292 6.66588 67.4753 6.78291 66.3337 7.24625C65.9874 7.38716 65.6506 7.56151 65.3282 7.76691L64.3967 8.69835C61.9511 11.144 61.9511 15.1087 64.3967 17.5543C66.8448 20 70.8071 20 73.2527 17.5543Z'
                fill='#57D290'
              />
              <path
                d='M81.6981 12.4481L67.8123 26.3315C72.7036 31.2229 80.6305 31.2229 85.5218 26.3315L86.7638 25.0896C85.5362 25.1684 84.2966 24.9749 83.1383 24.5068C82.1471 24.1056 81.218 23.5013 80.4179 22.7012L79.2142 21.4975L77.5042 23.2076V18.45H82.2641L80.5541 20.16L81.7578 21.3638C82.6869 22.2928 83.8261 22.8684 85.0251 23.1025C86.2216 23.3341 87.4755 23.2171 88.6171 22.7538C88.9635 22.6129 89.3002 22.4385 89.625 22.2331L90.5565 21.3017C93.0021 18.856 93.0021 14.8913 90.5565 12.4457C88.1084 10.0024 84.1438 10.0024 81.6981 12.4481Z'
                fill='#57D290'
              />
              <path
                d='M3.2362 20.6875C3.2362 21.9676 2.19966 23.0042 0.919507 23.0042H0V25.8176H2.0683C4.385 25.8176 6.26463 23.938 6.26463 21.6213V10.7734H3.2362V20.6875Z'
                fill='#393939'
              />
              <path d='M12.1018 5.84888H8.69604V21.3301H12.1018V5.84888Z' fill='#393939' />
              <path
                d='M55.2022 10.8571V15.7986C55.2022 16.8328 54.3639 17.6711 53.3298 17.6711C52.2956 17.6711 51.4573 16.8328 51.4573 15.7986V12.1206L48.0515 12.7702H48.0324V15.7986C48.0324 16.8328 47.1941 17.6711 46.16 17.6711C45.1831 17.6711 44.383 16.9235 44.297 15.9706C44.2994 15.9132 44.3066 15.8559 44.3066 15.7986V12.7702H44.2899V12.1206L40.8841 12.7702V15.7986C40.8841 15.8559 40.8913 15.9132 40.8936 15.9706C40.8053 16.9235 40.0052 17.6711 39.0307 17.6711C38.3095 17.6711 37.6837 17.2627 37.3708 16.6656C37.3828 16.5509 37.3876 16.4315 37.3876 16.3145C37.3876 13.6849 35.2572 11.5545 32.6276 11.5545H29.5084C29.5084 11.5545 34.6911 6.00877 34.5813 6.00877C34.4714 6.00877 31.9541 4.18408 31.9541 4.18408L25.8925 11.5904L27.0269 14.9603H32.6276C33.1912 14.9603 33.6785 15.3066 33.8791 15.7962C33.9483 15.9586 33.9818 16.133 33.9818 16.3145C33.9818 16.5127 33.9388 16.7014 33.8624 16.8734C33.6522 17.3439 33.1769 17.6711 32.6276 17.6711H24.8034V15.5932C24.8034 12.6364 22.3314 10.2529 19.3412 10.3938C16.5469 10.5275 14.3926 12.9398 14.3926 15.7413V15.8703C14.3926 18.7434 16.7236 21.0745 19.5968 21.0745H21.0035C20.822 22.1707 19.8691 23.0042 18.7226 23.0042H15.6656V25.8201H19.8714C22.1905 25.8201 24.0678 23.9429 24.0678 21.6238V21.0769H32.6252C33.8122 21.0769 34.9013 20.6422 35.7348 19.9185C36.6376 20.6422 37.7816 21.0769 39.0284 21.0769C40.4064 21.0769 41.6555 20.5442 42.5941 19.6821C43.5328 20.5466 44.7843 21.0769 46.16 21.0769C47.5452 21.0769 48.8038 20.5395 49.7449 19.6653C50.6859 20.5395 51.9445 21.0769 53.3298 21.0769C56.2435 21.0769 58.608 18.7148 58.608 15.7986V9.68205L55.2022 10.8571ZM21.3928 17.6687H19.592C18.5961 17.6687 17.7912 16.8638 17.7912 15.8679V15.5884C17.7912 14.5925 18.5961 13.7876 19.592 13.7876C20.0888 13.7876 20.5378 13.9882 20.8674 14.3131C21.1922 14.6403 21.3928 15.0893 21.3928 15.5884V17.6687Z'
                fill='#393939'
              />
            </svg>
            <div className='header'>
              <Link activeClass='active' to='about' spy={true} smooth={true} offset={-150} duration={500}>
                <div className='text-wrapper-5'>من نحن</div>
              </Link>
              <Link activeClass='active' to='home' spy={true} smooth={true} offset={-70} duration={500}>
                <div className='text-wrapper-6'>الرئسية</div>
              </Link>
              <Link activeClass='active' to='features' spy={true} smooth={true} offset={130} duration={500}>
                <div className='text-wrapper-7'>المميزات</div>
              </Link>
              <Link activeClass='active' to='faq' spy={true} smooth={true} offset={-70} duration={500}>
                <div className='text-wrapper-8'>أسئلة و أجوبة</div>
              </Link>
              <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-70} duration={500}>
                <div className='text-wrapper-9'>اتصل بنا</div>
              </Link>
              {/* <a href='https://sekoir-20.netlify.app/tos'>
                <div className='text-wrapper-9'>شروط الإاستخدام</div>
              </a>
              <a href='https://sekoir-20.netlify.app/levels'>
                <div className='text-wrapper-9'>المستويات</div>
              </a> */}
            </div>
            <div className='login'>
              <div className='div-wrapper'>
                <a href='https://sekoir.net/auth/login'>
                  <div className='text-wrapper-4'>تسجيل دخول</div>
                </a>
              </div>
              <div className='frame'>
                <a href='https://sekoir.net/auth/login'>
                  <div className='text-wrapper-3'>البدء</div>
                </a>
                <svg className='arrow' xmlns='http://www.w3.org/2000/svg' width='14' height='9' viewBox='0 0 14 9' fill='none'>
                  <path
                    d='M0.646446 4.14645C0.451184 4.34171 0.451184 4.65829 0.646446 4.85355L3.82843 8.03553C4.02369 8.2308 4.34027 8.2308 4.53553 8.03553C4.7308 7.84027 4.7308 7.52369 4.53553 7.32843L1.70711 4.5L4.53553 1.67157C4.7308 1.47631 4.7308 1.15973 4.53553 0.964467C4.34027 0.769205 4.02369 0.769205 3.82843 0.964467L0.646446 4.14645ZM14 4L1 4L1 5L14 5L14 4Z'
                    fill='white'
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className='group-2'>
            <div className='title'>
              <h1 className='h-1'>تبادل عملاتك بكل سهولة و أمان في منصة سكوار</h1>
              <p className='p'>سكوار هو منصة تبادل عملات إلكترونية في الجزائر يوفر طريقة آمنة وسريعة للمستخدمين لتبادل العملات الإلكترونية. نحن نضمن توفر جميع العملات والبنوك الإلكترونية المعتمدة وذلك بفضل نخبة من البائعين المعتمدين لدينا. بضغطة زر واحدة يمكن للمستخدمين الوصول إلى جميع العملات والبنوك الإلكترونية المتاحة للتبادل. نحن نولي أهمية كبيرة لأمن المعاملات ونسعى لتقديم تجربة تبادل سهلة وموثوقة للمستخدمين .</p>
              <div className='buttons'>
                <div className='frame-2'>
                  <a href='https://sekoir.net/auth/login'>
                    <div className='text-wrapper-3'>البدء</div>
                  </a>
                  <svg className='arrow' xmlns='http://www.w3.org/2000/svg' width='14' height='9' viewBox='0 0 14 9' fill='none'>
                    <path
                      d='M0.646446 4.14645C0.451184 4.34171 0.451184 4.65829 0.646446 4.85355L3.82843 8.03553C4.02369 8.2308 4.34027 8.2308 4.53553 8.03553C4.7308 7.84027 4.7308 7.52369 4.53553 7.32843L1.70711 4.5L4.53553 1.67157C4.7308 1.47631 4.7308 1.15973 4.53553 0.964467C4.34027 0.769205 4.02369 0.769205 3.82843 0.964467L0.646446 4.14645ZM14 4L1 4L1 5L14 5L14 4Z'
                      fill='white'
                    />
                  </svg>
                </div>
                <div className='frame-3'>
                  <a href='https://sekoir.net/auth/login'>
                    <div className='text-wrapper-10'>تسجيل الدخول</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <img
            className='image'
            alt='Image'
            src='https://generation-sessions.s3.amazonaws.com/68256b5f2a1d9b9301bcccbe95faad19/img/image-processing20210331-12558-12dvs0e-12-1.png'
          />
        </div>
        <div>
          <div id='about' className='page-2'>
            <div className='text-wrapper-12'>أعلى العملات المشفرة</div>
            <p className='text-wrapper-11'>
              يوفر لك سكوار أحدث التقنيات ، ويقدم لك حلاً بسيطًا لبيع سلعك الرقمية بالعملات المشفرة
            </p>
            <img
              className='group-3'
              alt='Group'
              src='https://generation-sessions.s3.amazonaws.com/68256b5f2a1d9b9301bcccbe95faad19/img/group-15727.png'
            />
            <div className='frame-4'>
              <a href='https://sekoir.net/auth/login'>
                <div className='text-wrapper-10'>إشتري الأن</div>
              </a>
            </div>
          </div>
          {/* page 3 */}
          <div id='features' className='page-3'>
            <div className='right-half'>
              <p className='create-your-crypto'>قم بإنشاء محفظة التشفير الخاصة بك اليوم</p>
              <p className='text-wrapper-13'>
                <span>يدعم سكوار</span>
                <span>تقريبًا جميع العملات المحلية (FIAT) </span>
                <span>
                  في العالم من خلال قائمة الحساب المصرفي لكل من عمليات السحب والإيداع المحلية ، والتي يمكن تداولها باستخدام العملات المشفرة المدعومة
                  في النظام.
                </span>
              </p>
              <div className='text-line'>
                <img
                  className='line'
                  alt='Line'
                  src='https://generation-sessions.s3.amazonaws.com/68256b5f2a1d9b9301bcccbe95faad19/img/line-82.svg'
                />
                <p className='text-wrapper-14'>
                  <span>يدعم سكوار</span>
                  <span>تقريبًا جميع العملات المحلية (FIAT) </span>
                  <span>في العالم من خلال قائمة الحساب المصرفي لكل من عمليات السحب والإيداع المحلية.</span>
                </p>
              </div>
              <div className='text-wrapper-17'>مصممة للجميع</div>
              <p className='text-wrapper-15'>تم تصميم نظامنا ليلائم مختلف المستخدمين من جميع أنحاء العالم</p>
              <div className='text-wrapper-18'>مصممة للجميع</div>
              <p className='text-wrapper-16'>تم تصميم نظامنا ليلائم مختلف المستخدمين من جميع أنحاء العالم</p>
            </div>
            <div className='overlap-2'>
              <img
                className='market-back-svg'
                alt='Market back svg'
                src='https://generation-sessions.s3.amazonaws.com/68256b5f2a1d9b9301bcccbe95faad19/img/market-back-svg.svg'
              />
              <div className='overlap-group-wrapper'>
                <div className='overlap-group-2'>
                  <img
                    className='aboutlight'
                    alt='Aboutlight'
                    src='https://generation-sessions.s3.amazonaws.com/68256b5f2a1d9b9301bcccbe95faad19/img/aboutlight-1.png'
                  />
                  <img
                    className='aboutlight-2'
                    alt='Aboutlight'
                    src='https://generation-sessions.s3.amazonaws.com/68256b5f2a1d9b9301bcccbe95faad19/img/aboutlight-2@2x.png'
                  />
                  <img
                    className='aboutlight-3'
                    alt='Aboutlight'
                    src='https://generation-sessions.s3.amazonaws.com/68256b5f2a1d9b9301bcccbe95faad19/img/aboutlight-3@2x.png'
                  />
                </div>
              </div>
            </div>
          </div>

          {/* page 4 */}
          <div className='page-4'>
            <div className='overlap-3'>
              <img
                className='sell-back-svg'
                alt='Sell back svg'
                src='https://generation-sessions.s3.amazonaws.com/68256b5f2a1d9b9301bcccbe95faad19/img/sell-back-svg.svg'
              />
              <div className='payment-sekoir'>
                <img className='payments-pic-png' alt='Payments pic png' src={payment_pic} />
                {/* <div className="sekoir">
                  <div className="rectangle-2" />
                  <div className="group-4">
                    <div className="text-wrapper-19">Powered By</div>
                    <img
                      className="group-5"
                      alt="Group"
                      src={payment_pic}
                    />
                  </div>
                </div> */}
              </div>
            </div>
            <div className='group-6'>
              <div className='text-wrapper-21'>المدفوعات</div>
              <p className='text-wrapper-20'>تحصيل مباشر للإيرادات. قم بدمج بوابة وجمع الأرباح مباشرة في حسابك المصرفي أو محفظة العملات المشفرة.</p>
              <div className='column'>
                <div className='row'>
                  <div className='group-7'>
                    <img
                      className='SVG'
                      alt='Svg'
                      src={crypto}
                    />
                    <div className='text-wrapper-22'>تشفير</div>
                    <p className='text-wrapper-23'>استخدم البنية التحتية للتشفير المضمنة لدينا. دعم BTC و ETH و LTC و USDT و USDC</p>
                  </div>
                  <div className='group-8'>
                    <img
                      className='SVG'
                      alt='Svg'
                      src={gateways}
                    />
                    <div className='text-wrapper-24'>بوابات</div>
                    <p className='text-wrapper-23'>بيع عالميًا باستخدام PayPal و Stripe و CashApp وأكثر من 12 بوابة شائعة أخرى.</p>
                  </div>
                </div>
                <div className='row'>
                  <div className='group-9'>
                    <img
                      className='SVG'
                      alt='Svg'
                      src= {payouts}
                    />
                    <div className='text-wrapper-25'>المدفوعات</div>
                    <p className='text-wrapper-26'>سنقوم بالحسابات والعمل الجاد من أجلك. كل ذلك بتقرير بسيط وسهل القراءة.</p>
                  </div>
                  <div className='group-10'>
                    <img className='SVG' alt='Svg' src={fees} />
                    <div className='text-wrapper-22'>مصاريف</div>
                    <p className='text-wrapper-23'>على عكس المنصات الشهيرة الأخرى ، فإن Sekoir تحصل على أقل رسوم بالمقارنة - بفارق ضئيل.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* page 5 */}
          <div className='page-5'>
            <p className='start-trading-in'>ابدأ صفقاتك بخطوات بسيطة</p>
            <div className='overlaps'>
              <div className='overlap-5'>
                <div className='rectangle-3'>
                  <img
                    className='mask-group-2'
                    alt='Mask group'
                    src='https://generation-sessions.s3.amazonaws.com/68256b5f2a1d9b9301bcccbe95faad19/img/mask-group-2@2x.png'
                  />
                  <img
                    className='element-2'
                    alt='Element'
                    src='https://generation-sessions.s3.amazonaws.com/68256b5f2a1d9b9301bcccbe95faad19/img/6f0219118244899-3--1--1@2x.png'
                  />
                  <p className='text-wrapper-28'>سنوجهك خلال هذه العملية.</p>
                  <div className='text-wrapper-29'>أنشئ حسابك</div>
                </div>
              </div>
              <div className='overlap'>
                <div className='rectangle'>
                  <img
                    className='mask-group'
                    alt='Mask group'
                    src='https://generation-sessions.s3.amazonaws.com/68256b5f2a1d9b9301bcccbe95faad19/img/mask-group-2@2x.png'
                  />
                  <img
                    className='element'
                    alt='Element'
                    src='https://generation-sessions.s3.amazonaws.com/68256b5f2a1d9b9301bcccbe95faad19/img/6f0219118244899-2-removebg-preview-1@2x.png'
                  />
                  <p className='text-wrapper'>شراء العملات المشفرة من خلال شركائنا أو تحويل الأموال.</p>
                  <div className='text-wrapper-2'>أودع معنا</div>
                </div>
                <div className='ellipse' />
                <img
                  className='group'
                  alt='Group'
                  src='https://generation-sessions.s3.amazonaws.com/68256b5f2a1d9b9301bcccbe95faad19/img/group-15540@2x.png'
                />
              </div>
              <div className='overlap-4'>
                <div className='rectangle'>
                  <img
                    className='mask-group'
                    alt='Mask group'
                    src='https://generation-sessions.s3.amazonaws.com/68256b5f2a1d9b9301bcccbe95faad19/img/mask-group-2@2x.png'
                  />
                  <img
                    className='element-f'
                    alt='Element'
                    src='https://generation-sessions.s3.amazonaws.com/68256b5f2a1d9b9301bcccbe95faad19/img/6f0219118244899-1--1--1@2x.png'
                  />
                  <p className='text-wrapper'>تعرف على مدى سهولة التداول والدفع والاستثمار مع سكوار</p>
                  <div className='text-wrapper-2'>تداول العملات</div>
                </div>
                <div className='ellipse' />
                <img
                  className='group'
                  alt='Group'
                  src='https://generation-sessions.s3.amazonaws.com/68256b5f2a1d9b9301bcccbe95faad19/img/group-15540@2x.png'
                />
              </div>
            </div>
          </div>
          {/* page 6 */}
          <div className='page-6'>
            <div id='faq' className='faq'>
              <div className='text-wrapper-30'>أسئلة مكررة</div>
              <p className='text-wrapper-31'>
                لقد قدمنا ​​أدناه القليل من المشكلات العامة ، والمتعلقة بالإيداع ، والحساب ، والمتعلق بالأمان. إذا كانت لديك أي أسئلة أخرى ، فيرجى
                الاتصال بنا باستخدام نموذج الاتصال أدناه.
              </p>
            </div>
            <div className='tabs'>
              <div className='tab0'>
                <div className={`text-wrapper-32 ${activeTab === 'general' ? 'active' : ''}`} onMouseEnter={() => handleTabHover('general')}>
                  عام
                </div>
                <img
                  id='underline'
                  className={`line-2 ${activeTab === 'general' || activeTab === '' ? 'active' : ''}`}
                  alt='Line'
                  src='https://generation-sessions.s3.amazonaws.com/68256b5f2a1d9b9301bcccbe95faad19/img/line-83.svg'
                />
              </div>
              <div className='tab0'>
                <div
                  className={`text-wrapper-33 ${activeTab === 'transactions' ? 'active' : ''}`}
                  onMouseEnter={() => handleTabHover('transactions')}
                >
                  المعاملات
                </div>
                <img
                  id='underline'
                  className={`line-2 ${activeTab === 'transactions' ? 'active' : ''}`}
                  alt='Line'
                  src='https://generation-sessions.s3.amazonaws.com/68256b5f2a1d9b9301bcccbe95faad19/img/line-83.svg'
                />
              </div>
              <div className='tab0'>
                <div className={`text-wrapper-34 ${activeTab === 'accounts' ? 'active' : ''}`} onMouseEnter={() => handleTabHover('accounts')}>
                  حسابات
                </div>
                <img
                  id='underline'
                  className={`line-2 ${activeTab === 'accounts' ? 'active' : ''}`}
                  alt='Line'
                  src='https://generation-sessions.s3.amazonaws.com/68256b5f2a1d9b9301bcccbe95faad19/img/line-83.svg'
                />
              </div>
              <div className='tab0'>
                <div className={`text-wrapper-35 ${activeTab === 'security' ? 'active' : ''}`} onMouseEnter={() => handleTabHover('security')}>
                  حماية
                </div>
                <img
                  id='underline'
                  className={`line-2 ${activeTab === 'security' ? 'active' : ''}`}
                  alt='Line'
                  src='https://generation-sessions.s3.amazonaws.com/68256b5f2a1d9b9301bcccbe95faad19/img/line-83.svg'
                />
              </div>
            </div>

            <div className='questions'>
              <div className='overlap-6'>
                <p className='text-wrapper-36'>هل يمكنني شراء جيفت كارد بالعملات المشفرة؟</p>
                <div className='vector-wrapper' onClick={() => toggle('1')}>
                  <img
                    className='vector-2'
                    alt='Vector'
                    src='https://generation-sessions.s3.amazonaws.com/68256b5f2a1d9b9301bcccbe95faad19/img/vector-4.svg'
                  />
                </div>
              </div>
              <p id='answer1' className='text-wrapper-37'>
                نعم ، يمكنك شراء جيفت كارد بالعملات المشفرة على نظامنا
              </p>
              <div className='overlap-7'>
                <p className='text-wrapper-36'>هل تدعم المنصة العديد من اللغات؟</p>
                <div className='vector-wrapper' onClick={() => toggle('2')}>
                  <img
                    className='vector-2'
                    alt='Vector'
                    src='https://generation-sessions.s3.amazonaws.com/68256b5f2a1d9b9301bcccbe95faad19/img/vector-3.svg'
                  />
                </div>
              </div>
              <p id='answer2' style={{ display: 'none' }} className='text-wrapper-37'>
                نعم ، و لكنك تستطيع التواصل مع الدعم ان لم تجد لغتك على المنصة
              </p>
              <div className='overlap-8'>
                <p className='text-wrapper-36'>هل كل العملات المشفرة مدعومة؟</p>
                <div className='vector-wrapper' onClick={() => toggle('3')}>
                  <img
                    className='vector-2'
                    alt='Vector'
                    src='https://generation-sessions.s3.amazonaws.com/68256b5f2a1d9b9301bcccbe95faad19/img/vector-3.svg'
                  />
                </div>
              </div>
              <p id='answer3' style={{ display: 'none' }} className='text-wrapper-37'>
                ليست كل العملات المشفره مدعومه و لكننا سنضيف الباقي مغ الوقت
              </p>
              <div className='overlap-9'>
                <p className='text-wrapper-36'>منطقتي غير مدعومة</p>
                <div className='vector-wrapper' onClick={() => toggle('4')}>
                  <img
                    className='vector-2'
                    alt='Vector'
                    src='https://generation-sessions.s3.amazonaws.com/68256b5f2a1d9b9301bcccbe95faad19/img/vector-3.svg'
                  />
                </div>
              </div>
              <p id='answer4' style={{ display: 'none' }} className='text-wrapper-37'>
                منصتنا خاصة بالمناطق المحدوده, و لكن يمكنك التواصل مع الدعم لترى إن كان بالإمكان دعم منطفتك
              </p>
              <div className='overlap-10'>
                <p className='text-wrapper-36'>أريد مسح بياناتي</p>
                <div className='vector-wrapper' onClick={() => toggle('5')}>
                  <img
                    className='vector-2'
                    alt='Vector'
                    src='https://generation-sessions.s3.amazonaws.com/68256b5f2a1d9b9301bcccbe95faad19/img/vector-3.svg'
                  />
                </div>
              </div>
              <p id='answer5' style={{ display: 'none' }} className='text-wrapper-37'>
                الرجاء التواصل مع الدعم بخصوص هذا
              </p>
            </div>
          </div>
          {/* page 7 */}
          <div className='page-7'>
            <div id='contact' className='group-11'>
              <div className='need-help'>تحتاج مساعدة؟</div>
              <div className='helps'>
                <div className='group-12'>
                  <img
                    className='group-14'
                    alt='Group'
                    src='https://generation-sessions.s3.amazonaws.com/68256b5f2a1d9b9301bcccbe95faad19/img/group-15576@2x.png'
                  />
                  <div className='group-13'>
                    <div className='text-wrapper-39'>24/7 دعم الدردشة</div>
                    <p className='text-wrapper-38'>لوريم إيبسوم هو ببساطة نص شكلي للطباعة.</p>
                  </div>
                </div>
                <div className='group-15'>
                  <img
                    className='group-16'
                    alt='Group'
                    src='https://generation-sessions.s3.amazonaws.com/68256b5f2a1d9b9301bcccbe95faad19/img/group-15571@2x.png'
                  />
                  <div className='group-13'>
                    <div className='text-wrapper-41'>مدونة</div>
                    <p className='text-wrapper-38'>لوريم إيبسوم هو ببساطة نص شكلي للطباعة.</p>
                  </div>
                </div>
                <div className='group-17'>
                  <img
                    className='group-18'
                    alt='Group'
                    src='https://generation-sessions.s3.amazonaws.com/68256b5f2a1d9b9301bcccbe95faad19/img/group@2x.png'
                  />
                  <div className='group-13'>
                    <div className='text-wrapper-39'>أسئلة وأجوبة</div>
                    <p className='text-wrapper-38'>لوريم إيبسوم هو ببساطة نص شكلي للطباعة.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* page 8 */}
          <div className='overlap-wrapper'>
            <div className='overlap-11'>
              <div className='text-wrapper-42'>جــاهز للانـضـمام ؟</div>
              <p className='being-your-own-boss'>
                موقعنا هو منصة تداول عبر الإنترنت متخصصة في بيع وشراء العملات الرقمية بطريقة آمنة وموثوقة. نحن نوفر بيئة تداول موثوقة وشفافة للمستخدمين الذين يرغبون في التعامل مع العملات الرقمية.
              </p>
              <div className='frame-5'>
                <a href='https://sekoir.net/auth/login'>
                  <div className='text-wrapper-43'>البدء</div>
                </a>
                <svg className='arrow' xmlns='http://www.w3.org/2000/svg' width='14' height='9' viewBox='0 0 14 9' fill='none'>
                  <path
                    d='M0.646446 4.14645C0.451184 4.34171 0.451184 4.65829 0.646446 4.85355L3.82843 8.03553C4.02369 8.2308 4.34027 8.2308 4.53553 8.03553C4.7308 7.84027 4.7308 7.52369 4.53553 7.32843L1.70711 4.5L4.53553 1.67157C4.7308 1.47631 4.7308 1.15973 4.53553 0.964467C4.34027 0.769205 4.02369 0.769205 3.82843 0.964467L0.646446 4.14645ZM14 4L1 4L1 5L14 5L14 4Z'
                    fill='#121417'
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className='group-19'>
            <svg className='group-21' xmlns='http://www.w3.org/2000/svg' width='176' height='57' viewBox='0 0 176 57' fill='none'>
              <path
                d='M139.183 33.3533L165.562 6.97015C156.268 -2.32338 141.207 -2.32338 131.914 6.97015L129.558 9.3253C131.891 9.17555 134.246 9.54311 136.447 10.4325C138.33 11.1949 140.095 12.343 141.616 13.8632L143.903 16.1502L147.152 12.9011V21.9451H138.108L141.357 18.696L139.07 16.4089C137.305 14.6437 135.14 13.55 132.862 13.1053C130.589 12.6652 128.206 12.8875 126.037 13.7679C125.379 14.0356 124.739 14.3669 124.127 14.7571L122.357 16.5269C117.71 21.1736 117.71 28.7065 122.357 33.3533C127.008 38 134.536 38 139.183 33.3533Z'
                fill='#57D290'
              />
              <path
                d='M155.23 23.6509L128.847 50.0295C138.14 59.323 153.201 59.323 162.495 50.0295L164.855 47.6698C162.522 47.8195 160.167 47.452 157.966 46.5626C156.083 45.8002 154.318 44.6521 152.798 43.1319L150.511 40.8449L147.261 44.094V35.0546H156.305L153.056 38.3037L155.343 40.5908C157.109 42.356 159.273 43.4496 161.551 43.8943C163.825 44.3345 166.207 44.1121 168.376 43.2318C169.034 42.9641 169.674 42.6328 170.291 42.2425L172.061 40.4728C176.708 35.826 176.708 28.2931 172.061 23.6464C167.41 19.0042 159.877 19.0042 155.23 23.6509Z'
                fill='#57D290'
              />
              <path
                d='M6.14879 39.3047C6.14879 41.737 4.17935 43.7064 1.74706 43.7064H0V49.052H3.92977C8.33149 49.052 11.9028 45.4807 11.9028 41.079V20.468H6.14879V39.3047Z'
                fill='#393939'
              />
              <path d='M22.9921 11.1108H16.5211V40.5252H22.9921V11.1108Z' fill='#393939' />
              <path
                d='M104.888 20.628V30.0168C104.888 31.9817 103.295 33.5745 101.33 33.5745C99.3654 33.5745 97.7726 31.9817 97.7726 30.0168V23.0285L91.3016 24.2628H91.2653V30.0168C91.2653 31.9817 89.6725 33.5745 87.7076 33.5745C85.8517 33.5745 84.3314 32.1541 84.1681 30.3435C84.1726 30.2346 84.1863 30.1257 84.1863 30.0168V24.2628H84.1545V23.0285L77.6835 24.2628V30.0168C77.6835 30.1257 77.6971 30.2346 77.7016 30.3435C77.5337 32.1541 76.0136 33.5745 74.1621 33.5745C72.7917 33.5745 71.6028 32.7985 71.0083 31.6641C71.031 31.4463 71.0401 31.2193 71.0401 30.997C71.0401 26.0008 66.9923 21.953 61.9961 21.953H56.0697C56.0697 21.953 65.9168 11.4161 65.7081 11.4161C65.4994 11.4161 60.7164 7.94922 60.7164 7.94922L49.1994 22.0211L51.3549 28.424H61.9961C63.0671 28.424 63.9928 29.082 64.374 30.0123C64.5056 30.3209 64.5691 30.6521 64.5691 30.997C64.5691 31.3736 64.4874 31.7321 64.3422 32.0589C63.9429 32.9528 63.0398 33.5745 61.9961 33.5745H47.1301V29.6266C47.1301 24.0087 42.4334 19.4799 36.752 19.7477C31.4427 20.0018 27.3496 24.585 27.3496 29.9079V30.153C27.3496 35.612 31.7785 40.0409 37.2376 40.0409H39.9104C39.5655 42.1238 37.7549 43.7075 35.5767 43.7075H29.7683V49.0577H37.7595C42.1657 49.0577 45.7325 45.4909 45.7325 41.0846V40.0455H61.9916C64.2469 40.0455 66.3162 39.2196 67.8999 37.8446C69.6152 39.2196 71.7888 40.0455 74.1576 40.0455C76.7759 40.0455 79.1492 39.0335 80.9326 37.3954C82.716 39.0381 85.0938 40.0455 87.7076 40.0455C90.3396 40.0455 92.731 39.0245 94.5189 37.3636C96.3068 39.0245 98.6983 40.0455 101.33 40.0455C106.866 40.0455 111.359 35.5576 111.359 30.0168V18.3954L104.888 20.628ZM40.6501 33.57H37.2285C35.3362 33.57 33.807 32.0407 33.807 30.1484V29.6175C33.807 27.7252 35.3362 26.1959 37.2285 26.1959C38.1724 26.1959 39.0255 26.5771 39.6517 27.1943C40.2689 27.816 40.6501 28.6691 40.6501 29.6175V33.57Z'
                fill='#393939'
              />
            </svg>
            <div className='group-20'>
              <Link activeClass='active' to='about' spy={true} smooth={true} offset={-150} duration={500}>
                <div className='text-wrapper-44'>من نحن</div>
              </Link>
              <Link activeClass='active' to='home' spy={true} smooth={true} offset={-70} duration={500}>
                <div className='text-wrapper-45'>الرئسية</div>
              </Link>
              <Link activeClass='active' to='features' spy={true} smooth={true} offset={130} duration={500}>
                <div className='text-wrapper-46'>المميزات</div>
              </Link>
              <Link activeClass='active' to='faq' spy={true} smooth={true} offset={-70} duration={500}>
                <div className='text-wrapper-47'>أسئلة و أجوبة</div>
              </Link>
              <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-70} duration={500}>
                <div className='text-wrapper-48'>اتصل بنا</div>
              </Link>
             
            </div>
            <div className='rectangle-4' />
            <div className="conditions1">
                <a href='https://sekoir-20.netlify.app/tos'>
                  <div className='condition1'>أحكام الخصـوصية</div>
                </a>
                <a href='https://sekoir-20.netlify.app/levels'>
                  <div className='condition1'>قواعد الإستعمال</div>
                </a>
              </div>
            <div className='group-22'>
              <div className='div-copyright-social'>
                  <div className='link-SVG-wrapper'>
                    <a href='https://t.me/Sekoirdz'>
                      <img className='link-SVG' alt='telegram icon' src={telegram} />
                    </a>
                    <img className='link-SVG' alt='discord icon' src={discord} />
                    <img className='link-SVG' alt='twitter icon' src={twitter} />
                    <img className='link-SVG' alt='tiktok icon' src={tiktok} />
                    <img className='link-SVG' alt='youtube icon' src={youtube} />
                    <img className='link-SVG' alt='instagram icon' src={instagram} />
                  </div>
              </div>
              <div className="conditions">
                <a href='https://sekoir-20.netlify.app/tos'>
                  <div className='condition'>أحكام الخصـوصية</div>
                </a>
                <a href='https://sekoir-20.netlify.app/levels'>
                  <div className='condition'>قواعد الإستعمال</div>
                </a>
              </div>
  
              <div className='text-wrapper-49'>جميع الحقوق محفوظة © 2023</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
