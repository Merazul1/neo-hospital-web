import React, { useState } from 'react';
import { 
  Share2, 
  Download, 
  ExternalLink, 
  Copy, 
  Check, 
  Sparkles, 
  Smartphone, 
  Monitor, 
  Heart,
  MessageCircle
} from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

export const ShareableBanner: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'facebook' | 'whatsapp'>('facebook');
  const [isCopied, setIsCopied] = useState(false);

  const websiteUrl = 'https://www.neohospitallucknow.com/';
  const fbBannerUrl = '/images/neo-hospital-banner-facebook.jpg';
  const waBannerUrl = '/images/neo-hospital-banner-whatsapp-status.jpg';

  const shareTextWhatsApp = encodeURIComponent(
    `🏥 *NEO HOSPITAL Lucknow - Superspeciality Hospital & Cancer Center*\n\n` +
    `⚡ 24/7 Emergency & ICU Ventilator Beds\n` +
    `🎗️ Chemotherapy & Cancer Surgery\n` +
    `🦴 C-ARM Orthopedic Joint Replacement\n` +
    `🔬 Laparoscopic Keyhole Surgeries\n` +
    `👨‍⚕️ 34+ Specialist Doctors across 13 Departments\n\n` +
    `📍 3, Pratap Nagar, Tedhi Pulia, Ring Road, Lucknow - 226022\n` +
    `📞 24/7 Helpline: 9919722223\n\n` +
    `👉 Tap / Click link to visit official website:\n${websiteUrl}`
  );

  const shareTextFacebook = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(websiteUrl)}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(websiteUrl).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500);
    });
  };

  return (
    <section id="share-banner" className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950/80 border border-teal-500/40 text-teal-300 text-xs font-semibold backdrop-blur-md mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-teal-400" />
            <span>Official Hospital Media &amp; Shareable Banners</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            NEO Hospital <span className="text-red-500">Official Banners</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Click on any banner below to visit the official website directly, or share and download verified graphics for WhatsApp Status and Facebook.
          </p>

          {/* Format Selection Tabs */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-slate-800/90 border border-slate-700/80 shadow-lg">
            <button
              onClick={() => setActiveTab('facebook')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'facebook'
                  ? 'bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Monitor className="w-4 h-4" />
              <span>Facebook &amp; Link Card (1200x630)</span>
            </button>
            <button
              onClick={() => setActiveTab('whatsapp')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'whatsapp'
                  ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>WhatsApp Status (1080x1920)</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Facebook / Web Link Banner (1200x630) */}
        {activeTab === 'facebook' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Banner Preview (Clickable) */}
            <div className="lg:col-span-8">
              <div className="relative group rounded-2xl overflow-hidden border-2 border-teal-500/40 shadow-2xl bg-slate-950">
                <a
                  href={websiteUrl}
                  title="Click banner to visit NEO Hospital official website"
                  className="block relative overflow-hidden focus:outline-none focus:ring-4 focus:ring-teal-500"
                >
                  <img
                    src={fbBannerUrl}
                    alt="NEO Hospital Lucknow Official Banner for Facebook and WhatsApp Link Share"
                    className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Hover Overlay Hint */}
                  <div className="absolute inset-0 bg-teal-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center backdrop-blur-xs">
                    <div className="w-16 h-16 rounded-full bg-teal-500/90 text-white flex items-center justify-center shadow-lg mb-3">
                      <ExternalLink className="w-8 h-8" />
                    </div>
                    <span className="text-xl font-black text-white">Click to Visit Website</span>
                    <span className="text-sm font-medium text-teal-200 mt-1">www.neohospitallucknow.com</span>
                  </div>
                </a>

                {/* Banner Click Badge */}
                <div className="p-3 bg-slate-950/90 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-2 text-slate-300">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="font-semibold text-white">Clickable Banner:</span>
                    <span className="text-slate-400 hidden sm:inline">Tap / click image to open hospital website</span>
                  </div>
                  <a
                    href={websiteUrl}
                    className="text-teal-400 hover:text-teal-300 font-bold inline-flex items-center gap-1"
                  >
                    <span>neohospitallucknow.com</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Share & Download Controls */}
            <div className="lg:col-span-4 space-y-4">
              <div className="p-6 rounded-2xl bg-slate-800/90 border border-slate-700/80 shadow-xl space-y-5">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Share2 className="w-5 h-5 text-teal-400" />
                    Share on Social Media
                  </h3>
                  <p className="text-xs text-slate-300">
                    When you share the website link, this graphic automatically appears as the clickable preview card!
                  </p>
                </div>

                {/* WhatsApp Share Button */}
                <a
                  href={`https://api.whatsapp.com/send?text=${shareTextWhatsApp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold px-5 py-3.5 rounded-xl shadow-lg transition"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Share on WhatsApp</span>
                </a>

                {/* Facebook Share Button */}
                <a
                  href={shareTextFacebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 bg-[#1877F2] hover:bg-[#166fe5] text-white font-bold px-5 py-3.5 rounded-xl shadow-lg transition"
                >
                  <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>Share on Facebook</span>
                </a>

                {/* Download High-Res Image Button */}
                <a
                  href={fbBannerUrl}
                  download="neo-hospital-lucknow-facebook-banner.jpg"
                  className="w-full flex items-center justify-center gap-2.5 bg-slate-700 hover:bg-slate-600 text-white font-bold px-5 py-3 rounded-xl border border-slate-600 transition"
                >
                  <Download className="w-4 h-4 text-teal-400" />
                  <span>Download Facebook Banner (1200x630)</span>
                </a>

                {/* Copy Website Link Button */}
                <button
                  onClick={handleCopyLink}
                  className="w-full flex items-center justify-center gap-2 bg-slate-900/90 hover:bg-slate-900 text-slate-200 border border-slate-700 font-semibold px-4 py-2.5 rounded-xl text-xs transition"
                >
                  {isCopied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Website Link Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-400" />
                      <span>Copy Website Link to Clipboard</span>
                    </>
                  )}
                </button>

                {/* Tip note */}
                <div className="p-3 rounded-xl bg-teal-950/60 border border-teal-500/30 text-[11px] text-teal-200 leading-relaxed">
                  💡 <strong>Tip for Facebook:</strong> Sharing <code className="text-white bg-slate-900 px-1 py-0.5 rounded">neohospitallucknow.com</code> shows this HD banner card. Clicks on the banner send visitors straight to your homepage.
                </div>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: WhatsApp Status & Instagram Story (1080x1920) */}
        {activeTab === 'whatsapp' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Vertical Phone Mockup Preview */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative group w-full max-w-[340px] sm:max-w-[380px] rounded-3xl overflow-hidden border-4 border-slate-700 shadow-2xl bg-black">
                {/* Simulated Phone Top Notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-4 bg-slate-800 rounded-full z-20 pointer-events-none"></div>

                <a
                  href={websiteUrl}
                  title="Click banner to visit NEO Hospital official website"
                  className="block relative overflow-hidden focus:outline-none"
                >
                  <img
                    src={waBannerUrl}
                    alt="NEO Hospital Lucknow WhatsApp Status Banner 9:16 Vertical"
                    className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Hover Overlay Hint */}
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center backdrop-blur-xs z-10">
                    <div className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg mb-3">
                      <ExternalLink className="w-7 h-7" />
                    </div>
                    <span className="text-lg font-black text-white">Click to Visit Website</span>
                    <span className="text-xs font-medium text-emerald-200 mt-1">www.neohospitallucknow.com</span>
                  </div>
                </a>

                {/* Mobile Bottom Bar */}
                <div className="p-3 bg-slate-950 border-t border-slate-800 text-center text-xs text-slate-300">
                  <span className="text-emerald-400 font-bold">9:16 Vertical Mobile Format</span> (1080 x 1920 px)
                </div>
              </div>
            </div>

            {/* Quick Actions & Instructions for WhatsApp Status */}
            <div className="lg:col-span-6 space-y-5">
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-800/90 border border-slate-700/80 shadow-xl space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Smartphone className="w-6 h-6 text-emerald-400" />
                    WhatsApp Status &amp; Story Banner
                  </h3>
                  <p className="mt-1 text-sm text-slate-300">
                    Perfect full-screen 9:16 resolution customized for WhatsApp Status, Facebook Stories, and Instagram.
                  </p>
                </div>

                {/* Direct Action Buttons */}
                <div className="space-y-3">
                  {/* Download Status Banner */}
                  <a
                    href={waBannerUrl}
                    download="neo-hospital-whatsapp-status-banner.jpg"
                    className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold px-5 py-4 rounded-xl shadow-lg transition text-sm sm:text-base"
                  >
                    <Download className="w-5 h-5" />
                    <span>Download HD WhatsApp Status Banner</span>
                  </a>

                  {/* Share on WhatsApp */}
                  <a
                    href={`https://api.whatsapp.com/send?text=${shareTextWhatsApp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold px-5 py-3.5 rounded-xl shadow-md transition text-sm"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Share Website &amp; Hospital Details on WhatsApp</span>
                  </a>
                </div>

                {/* Step-by-Step Instructions */}
                <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-700 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                    <Heart className="w-4 h-4 text-red-500" />
                    How to post on WhatsApp Status with Clickable Link:
                  </h4>
                  <ol className="text-xs text-slate-300 space-y-2 list-decimal list-inside leading-relaxed">
                    <li>Click <strong>Download HD WhatsApp Status Banner</strong> above to save the image to your phone or computer.</li>
                    <li>Open WhatsApp &rarr; go to the <strong>Status / Updates</strong> tab &rarr; tap the Camera icon.</li>
                    <li>Select the downloaded NEO Hospital banner.</li>
                    <li>Tap the <strong>Stickers</strong> icon and select <strong>Link</strong> (or type the link in the caption): <span className="text-teal-300 font-semibold">{websiteUrl}</span></li>
                    <li>Hit Post! Anyone viewing your status can tap the link to visit NEO Hospital directly.</li>
                  </ol>
                </div>

                {/* Copy Link Button */}
                <button
                  onClick={handleCopyLink}
                  className="w-full flex items-center justify-center gap-2 bg-slate-900/80 hover:bg-slate-900 text-slate-200 border border-slate-700 font-semibold px-4 py-2.5 rounded-xl text-xs transition"
                >
                  {isCopied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Website Link Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-400" />
                      <span>Copy Link: https://www.neohospitallucknow.com/</span>
                    </>
                  )}
                </button>

              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
