import { HeroScene } from "../components/gsap/HeroScene";
import { Reveal } from "../components/motion/Reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { MagneticButton } from "../components/motion/MagneticButton";

export default function ClinicLandingPage() {
    return (
        <main className="min-h-screen bg-[#050505] text-white selection:bg-[#D4AF37] selection:text-black">
            <HeroScene />

            {/* Trust Mini Features Bar */}
            <section className="relative z-30 border-y border-white/5 bg-[#0a0a0a]/80 backdrop-blur-xl py-8">
                <div className="container mx-auto px-6">
                    <Reveal direction="up" delay={0.2}>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 text-center divide-x divide-x-reverse divide-white/5">
                            <div className="px-4 group">
                                <h3 className="text-[#D4AF37] font-black text-3xl mb-2 transition-transform group-hover:scale-110 duration-300">+١٥</h3>
                                <p className="text-sm text-zinc-400 font-medium">سنة خبرة طبية</p>
                            </div>
                            <div className="px-4 group">
                                <h3 className="text-[#D4AF37] font-black text-3xl mb-2 transition-transform group-hover:scale-110 duration-300">أجهزة</h3>
                                <p className="text-sm text-zinc-400 font-medium">معتمدة عالمياً</p>
                            </div>
                            <div className="px-4 group">
                                <h3 className="text-[#D4AF37] font-black text-3xl mb-2 transition-transform group-hover:scale-110 duration-300">بروتوكولات</h3>
                                <p className="text-sm text-zinc-400 font-medium">دقيقة ومخصصة</p>
                            </div>
                            <div className="px-4 group">
                                <h3 className="text-[#D4AF37] font-black text-3xl mb-2 transition-transform group-hover:scale-110 duration-300">إشراف</h3>
                                <p className="text-sm text-zinc-400 font-medium">طبي مباشر</p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="relative py-24 bg-[#0a0a0a] overflow-hidden">
                {/* Decorative Background Elements */}
                <div className="absolute top-40 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-[#B8860B]/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <Reveal direction="up">
                        <div className="text-center max-w-3xl mx-auto mb-20">
                            <h2 className="text-sm md:text-base font-bold text-[#D4AF37] tracking-widest uppercase mb-3">بروتوكولات العناية</h2>
                            <h3 className="text-4xl md:text-5xl font-black text-white mb-6">رعاية تفوق المعايير</h3>
                            <p className="text-zinc-400 text-xl leading-relaxed font-light">
                                نفخر بتقديم باقة متكاملة من أحدث التقنيات العلاجية العالمية، مصممة خصيصاً لتمنحك النتائج التي تستحقينها.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal direction="up" delay={0.2}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Service 1: Detox Scalp */}
                            <div className="group relative bg-[#111]/80 backdrop-blur-sm border border-white/5 rounded-[2rem] overflow-hidden hover:border-[#D4AF37]/30 transition-all duration-500 hover:-translate-y-2">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="p-8 lg:p-12 relative z-10 h-full flex flex-col justify-between">
                                    <div>
                                        <div className="w-full h-48 md:h-56 rounded-2xl overflow-hidden mb-8 relative border border-white/5 group-hover:border-[#D4AF37]/30 transition-colors duration-500">
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-black/20 to-transparent z-10" />
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800" alt="Detox Scalp" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                                        </div>
                                        <h4 className="text-3xl font-bold text-white mb-3">ديتوكس تنظيف فروة الرأس</h4>
                                        <p className="text-[#D4AF37] mb-6 font-medium text-lg">Detox Scalp | علاج للقشرة والتساقط</p>
                                        <p className="text-zinc-400 leading-relaxed mb-8 text-lg">
                                            جلسة احترافية لتنظيف فروة الرأس بعمق وإزالة الترسبات الدهنية، مع تحفيز البصيلات. مناسبة لجميع أنواع فروة الرأس.
                                        </p>

                                        <div className="space-y-4 mb-10 h-0 opacity-0 overflow-hidden group-hover:h-auto group-hover:opacity-100 transition-all duration-500 ease-out">
                                            <div className="border-t border-white/10 pt-6 mt-6">
                                                <strong className="text-white block mb-4 text-base">الخطوات الأساسية:</strong>
                                                <ul className="text-zinc-400 text-base space-y-2 list-disc list-inside marker:text-[#D4AF37]">
                                                    <li>تقييم شامل وتطبيق مقشر رغوي لطيف.</li>
                                                    <li>تنظيف عميق بجهاز الهايدرافيشل.</li>
                                                    <li>بخاخ مدعم بأحماض أمينية، كولاجين، زنك، وبيوتين.</li>
                                                    <li>ديرمابن مع ميزوثيرابي وفيتامينات مخصصة.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-3 mt-auto pt-6 border-t border-white/5 group-hover:border-transparent transition-colors">
                                        <span className="text-sm font-medium px-4 py-2 bg-white/5 rounded-full text-zinc-300">تقليل القشرة</span>
                                        <span className="text-sm font-medium px-4 py-2 bg-white/5 rounded-full text-zinc-300">تنظيف المسام</span>
                                        <span className="text-sm font-bold px-4 py-2 bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20 rounded-full shadow-[0_0_15px_rgba(228,187,81,0.1)]">تحفيز النمو</span>
                                    </div>
                                </div>
                            </div>

                            {/* Service 2: Vitamin C */}
                            <div className="group relative bg-[#111]/80 backdrop-blur-sm border border-white/5 rounded-[2rem] overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-2">
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="p-8 lg:p-12 relative z-10 h-full flex flex-col justify-between">
                                    <div>
                                        <div className="w-full h-48 md:h-56 rounded-2xl overflow-hidden mb-8 relative border border-white/5 group-hover:border-orange-500/30 transition-colors duration-500">
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-black/20 to-transparent z-10" />
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800" alt="Vitamin C Facial" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                                        </div>
                                        <h4 className="text-3xl font-bold text-white mb-3">جلسة تنظيف البشرة بفيتامين C</h4>
                                        <p className="text-orange-400 mb-6 font-medium text-lg">تفتيح ونضارة | تحفيز كولاجين</p>
                                        <p className="text-zinc-400 leading-relaxed mb-8 text-lg">
                                            جلسة متقدمة لتنظيف البشرة بعمق مع تطبيق فيتامين C النقي للحصول على إشراقة فورية وتوحيد لون البشرة.
                                        </p>

                                        <div className="space-y-4 mb-10 h-0 opacity-0 overflow-hidden group-hover:h-auto group-hover:opacity-100 transition-all duration-500 ease-out">
                                            <div className="border-t border-white/10 pt-6 mt-6">
                                                <strong className="text-white block mb-4 text-base">الخطوات الأساسية:</strong>
                                                <ul className="text-zinc-400 text-base space-y-2 list-disc list-inside marker:text-orange-500">
                                                    <li>تنظيف عميق وإزالة الرؤوس السوداء والشوائب.</li>
                                                    <li>تطبيق سيروم أسكوربيك أسيد Vitamin C بتكنيك احترافي.</li>
                                                    <li>ماسك فيتامين C لتعزيز الإشراقة.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-3 mt-auto pt-6 border-t border-white/5 group-hover:border-transparent transition-colors">
                                        <span className="text-sm font-medium px-4 py-2 bg-white/5 rounded-full text-zinc-300">توحيد اللون</span>
                                        <span className="text-sm font-medium px-4 py-2 bg-white/5 rounded-full text-zinc-300">تقليل التصبغات</span>
                                        <span className="text-sm font-bold px-4 py-2 bg-orange-500/10 text-orange-400 border border-orange-500/20 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.1)]">مضاد تأكسد قوي</span>
                                    </div>
                                </div>
                            </div>

                            {/* Service 3: Ocean Secrets */}
                            <div className="group relative bg-[#111]/80 backdrop-blur-sm border border-white/5 rounded-[2rem] overflow-hidden hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="p-8 lg:p-12 relative z-10 h-full flex flex-col justify-between">
                                    <div>
                                        <div className="w-full h-48 md:h-56 rounded-2xl overflow-hidden mb-8 relative border border-white/5 group-hover:border-blue-500/30 transition-colors duration-500">
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-black/20 to-transparent z-10" />
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800" alt="Ocean Secrets Caviar" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                                        </div>
                                        <h4 className="text-3xl font-bold text-white mb-3">جلسة Ocean Secrets بالكافيار</h4>
                                        <p className="text-blue-400 mb-6 font-medium text-lg">علاج وترطيب عميق للبشرة</p>
                                        <p className="text-zinc-400 leading-relaxed mb-8 text-lg">
                                            جلسة فاخرة تمنح البشرة تغذية مكثفة وترطيب عميق، مناسبة لجميع أنواع البشرة وخاصة الحساسة والجافة.
                                        </p>

                                        <div className="space-y-4 mb-10 h-0 opacity-0 overflow-hidden group-hover:h-auto group-hover:opacity-100 transition-all duration-500 ease-out">
                                            <div className="border-t border-white/10 pt-6 mt-6">
                                                <strong className="text-white block mb-4 text-base">الخطوات الأساسية:</strong>
                                                <ul className="text-zinc-400 text-base space-y-2 list-disc list-inside marker:text-blue-500">
                                                    <li>توزيع كبسولات الكافيار مع مساج لتنشيط الدورة الدموية.</li>
                                                    <li>تطبيق سيروم إلكسير الغني بالسيراميد وأوميجا 3 و 6 وحمض الهيالورونيك.</li>
                                                    <li>ماسك ترطيب كريمي غني، مع كريم عيون مخصص.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-3 mt-auto pt-6 border-t border-white/5 group-hover:border-transparent transition-colors">
                                        <span className="text-sm font-medium px-4 py-2 bg-white/5 rounded-full text-zinc-300">ترطيب عميق</span>
                                        <span className="text-sm font-medium px-4 py-2 bg-white/5 rounded-full text-zinc-300">استعادة المرونة</span>
                                        <span className="text-sm font-bold px-4 py-2 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.1)]">إشراقة صحية</span>
                                    </div>
                                </div>
                            </div>

                            {/* Service 4: Hydrafacial CO2 */}
                            <div className="group relative bg-[#111]/80 backdrop-blur-sm border border-white/5 rounded-[2rem] overflow-hidden hover:border-[#D4AF37]/30 transition-all duration-500 hover:-translate-y-2">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="p-8 lg:p-12 relative z-10 h-full flex flex-col justify-between">
                                    <div>
                                        <div className="w-full h-48 md:h-56 rounded-2xl overflow-hidden mb-8 relative border border-white/5 group-hover:border-[#D4AF37]/30 transition-colors duration-500">
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-black/20 to-transparent z-10" />
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800" alt="Hydrafacial" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                                        </div>
                                        <h4 className="text-3xl font-bold text-white mb-3">جلسة الهايدرافيشل (CO2)</h4>
                                        <p className="text-[#D4AF37] mb-6 font-medium text-lg">تنظيف مسام عميق | شد خفيف</p>
                                        <p className="text-zinc-400 leading-relaxed mb-8 text-lg">
                                            واحدة من أكثر جلسات تنظيف البشرة طلباً في جدة. مناسبة لجميع أنواع البشرة، وتعالج توسع المسام.
                                        </p>

                                        <div className="space-y-4 mb-10 h-0 opacity-0 overflow-hidden group-hover:h-auto group-hover:opacity-100 transition-all duration-500 ease-out">
                                            <div className="border-t border-white/10 pt-6 mt-6">
                                                <strong className="text-white block mb-4 text-base">الخطوات الأساسية:</strong>
                                                <ul className="text-zinc-400 text-base space-y-2 list-disc list-inside marker:text-[#D4AF37]">
                                                    <li>تنظيف الرؤوس السوداء والشوائب.</li>
                                                    <li>شفط الدهون بالهايدرافيشل مع سيروم مخصص.</li>
                                                    <li>الموجات فوق الصوتية والراديو فريكونسي لتحفيز الكولاجين.</li>
                                                    <li>كبسولات الأكسجين لنضارة فورية.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-3 mt-auto pt-6 border-t border-white/5 group-hover:border-transparent transition-colors">
                                        <span className="text-sm font-medium px-4 py-2 bg-white/5 rounded-full text-zinc-300">تصغير المسام</span>
                                        <span className="text-sm font-medium px-4 py-2 bg-white/5 rounded-full text-zinc-300">تقليل الدهون</span>
                                        <span className="text-sm font-bold px-4 py-2 bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20 rounded-full shadow-[0_0_15px_rgba(228,187,81,0.1)]">نضارة فورية</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Before & After Section */}
            <section id="before-after" className="relative py-24 bg-[#050505]">
                <div className="container mx-auto px-6 relative z-10">
                    <Reveal direction="up">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-sm md:text-base font-bold text-[#D4AF37] tracking-widest uppercase mb-3">نتائج حقيقية</h2>
                            <h3 className="text-4xl md:text-5xl font-black text-white mb-6">قصص نجاح عملائنا</h3>
                            <p className="text-zinc-400 text-xl font-light">
                                شاهد الفرق الواضح والنتائج المذهلة قبل وبعد العلاج في عياداتنا.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal direction="up" delay={0.2}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                            {/* Comparison 1: Siciloz */}
                            <div className="group relative rounded-[2rem] overflow-hidden bg-[#111] border border-white/5 aspect-square md:aspect-[4/3] shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                                {/* Before Image */}
                                <div className="absolute inset-0 bg-zinc-800">
                                    <img
                                        src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=800&auto=format&fit=crop"
                                        alt="Before Siciloz - Skin condition"
                                        className="w-full h-full object-cover saturate-50 contrast-75 brightness-75"
                                    />
                                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-zinc-300 font-bold text-sm">قبل</div>
                                </div>
                                {/* After Image Reveal */}
                                <div className="absolute inset-y-0 right-0 w-1/2 overflow-hidden border-l-2 border-[#D4AF37] transition-all duration-700 ease-in-out group-hover:w-[95%]">
                                    <img
                                        src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=800&auto=format&fit=crop"
                                        alt="After Siciloz - Rejuvenated skin"
                                        className="absolute inset-0 w-full h-full object-cover object-left filter-none"
                                        style={{ width: '200%', maxWidth: 'none', transform: 'translateX(0)' }}
                                    />
                                    <div className="absolute top-4 left-4 bg-[#D4AF37]/80 backdrop-blur-md px-3 py-1 rounded-full text-black font-bold text-sm z-10">بعد</div>
                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(228,187,81,0.5)] cursor-ew-resize z-20">
                                        <span className="text-black text-xs">↔</span>
                                    </div>
                                </div>
                                <div className="absolute bottom-6 right-6 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-white text-sm font-medium z-10">
                                    علاج سيسلوز
                                </div>
                            </div>

                            {/* Comparison 2: Hydrafacial */}
                            <div className="group relative rounded-[2rem] overflow-hidden bg-[#111] border border-white/5 aspect-square md:aspect-[4/3] shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                                {/* Before Image */}
                                <div className="absolute inset-0 bg-zinc-800">
                                    <img
                                        src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=800&auto=format&fit=crop"
                                        alt="Before Hydrafacial - Dull skin"
                                        className="w-full h-full object-cover saturate-50 contrast-75 brightness-75"
                                    />
                                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-zinc-300 font-bold text-sm">قبل</div>
                                </div>
                                {/* After Image Reveal */}
                                <div className="absolute inset-y-0 right-0 w-1/2 overflow-hidden border-l-2 border-orange-500 transition-all duration-700 ease-in-out group-hover:w-[95%]">
                                    <img
                                        src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=800&auto=format&fit=crop"
                                        alt="After Hydrafacial - Glowing skin"
                                        className="absolute inset-0 w-full h-full object-cover object-left filter-none"
                                        style={{ width: '200%', maxWidth: 'none', transform: 'translateX(0)' }}
                                    />
                                    <div className="absolute top-4 left-4 bg-orange-500/80 backdrop-blur-md px-3 py-1 rounded-full text-white font-bold text-sm z-10">بعد</div>
                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(249,115,22,0.5)] cursor-ew-resize z-20">
                                        <span className="text-black text-xs">↔</span>
                                    </div>
                                </div>
                                <div className="absolute bottom-6 right-6 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-white text-sm font-medium z-10">
                                    جلسة الهايدرافيشل وتصغير المسام
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Testimonials & Videos Section */}
            <section className="relative py-24 bg-[#0a0a0a] border-t border-white/5 overflow-hidden">
                <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
                <div className="container mx-auto px-6 relative z-10">
                    <Reveal direction="up">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                            <div className="max-w-2xl">
                                <h2 className="text-sm md:text-base font-bold text-[#D4AF37] tracking-widest uppercase mb-3">شاهد خدماتنا</h2>
                                <h3 className="text-4xl md:text-5xl font-black text-white">خدماتنا</h3>
                            </div>
                            <div className="flex gap-2">
                                <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#D4AF37] hover:text-black hover:border-transparent transition-colors">
                                    <span className="text-xl">→</span>
                                </button>
                                <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#D4AF37] hover:text-black hover:border-transparent transition-colors">
                                    <span className="text-xl">←</span>
                                </button>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal direction="up" delay={0.2}>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Video Service 1 */}
                            <div className="group relative rounded-[2rem] aspect-[9/16] bg-zinc-900 overflow-hidden cursor-pointer border border-white/5 hover:border-[#D4AF37]/50 transition-colors">
                                <video
                                    src="/videos/hydra.mov"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                                {/* Play Button Placeholder (Optional, can just be an icon now since it auto-plays) */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white group-hover:border-l-black border-b-[8px] border-b-transparent ml-1" />
                                </div>

                                <div className="absolute bottom-6 left-6 right-6">
                                    <h4 className="text-white font-bold text-xl mb-2">جلسة الهايدرافيشل</h4>
                                    <p className="text-zinc-300 text-sm">شاهد خطوات تنظيف البشرة العميق وتصغير المسام خطوة بخطوة.</p>
                                </div>
                            </div>

                            {/* Video Service 2 */}
                            <div className="group relative rounded-[2rem] aspect-[9/16] bg-zinc-900 overflow-hidden cursor-pointer border border-white/5 hover:border-[#D4AF37]/50 transition-colors md:-translate-y-8">
                                <video
                                    src="/videos/siciloz.mov"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white group-hover:border-l-black border-b-[8px] border-b-transparent ml-1" />
                                </div>

                                <div className="absolute bottom-6 left-6 right-6">
                                    <h4 className="text-white font-bold text-xl mb-2">علاج سيسلوز</h4>
                                    <p className="text-zinc-300 text-sm">اكتشف تفاصيل الدقة والعناية في تقديم هذا البروتوكول العلاجي.</p>
                                </div>
                            </div>

                            {/* Video Testimonial 3 */}
                            <div className="group relative rounded-[2rem] aspect-[9/16] bg-zinc-900 overflow-hidden cursor-pointer border border-white/5 hover:border-[#D4AF37]/50 transition-colors">
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=600&h=1000&fit=crop')] bg-cover bg-center opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-[#D4AF37] transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white group-hover:border-l-black border-b-[8px] border-b-transparent ml-1" />
                                </div>

                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-full bg-zinc-800 border-2 border-[#D4AF37]" />
                                        <div>
                                            <p className="text-white font-bold text-sm">نورة ك.</p>
                                            <div className="flex text-[#D4AF37] text-xs">★★★★★</div>
                                        </div>
                                    </div>
                                    <p className="text-zinc-300 text-sm italic">"جلسة الأوشن سيكرتس بالكافيار تعطي ترطيب خيالي قبل المناسبات."</p>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* CTA Section - Modern Redesign */}
            <section id="booking" className="relative py-32 overflow-hidden bg-[#050505]">

                {/* Multi-layer background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#0a0a0a]" />

                {/* Gold ambient orbs */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#D4AF37]/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#D4AF37]/8 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-[#B8860B]/10 rounded-full blur-[80px] pointer-events-none" />

                {/* Grain texture overlay */}
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-0" />

                {/* Top & bottom gold hairlines */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">

                        {/* Eyebrow badge */}
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 backdrop-blur-md mb-10">
                            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                            <span className="text-[#D4AF37] text-sm font-semibold tracking-widest uppercase">احجزي موعدك الآن</span>
                        </div>

                        {/* Headline */}
                        <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
                            خطوتك الأولى نحو
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#D4AF37] via-[#F5D090] to-[#B8860B]">
                                بشرة مثالية وشعر صحي
                            </span>
                        </h2>

                        {/* Sub-text */}
                        <p className="text-zinc-400 text-xl md:text-2xl font-light mb-16 max-w-2xl mx-auto leading-relaxed">
                            استفيدي من التقييم الشامل مع نخبة من أطباء العيادة وابدئي رحلتك نحو الجمال الحقيقي.
                        </p>

                        {/* CTA Button */}
                        <MagneticButton>
                            <a href="https://wa.me/something" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center gap-5 px-10 py-5 rounded-full overflow-hidden shadow-[0_15px_30px_rgba(37,211,102,0.2)] hover:shadow-[0_20px_40px_rgba(37,211,102,0.4)] transition-all duration-700 ease-out">
                                {/* Base green background with scale effect */}
                                <div className="absolute inset-0 bg-[#25D366] transition-transform duration-700 group-hover:scale-[1.05]" />

                                {/* Light sweeping effect on hover */}
                                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-[150%] skew-x-[-30deg] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />

                                {/* Inner glass rim for depth */}
                                <div className="absolute inset-0 border border-white/30 rounded-full" />

                                {/* Content */}
                                <div className="relative z-10 flex items-center gap-4">
                                    <span className="font-extrabold text-2xl text-white tracking-wide mix-blend-overlay opacity-90">تواصل معنا عبر واتساب</span>
                                    <span className="font-extrabold text-2xl text-white tracking-wide absolute">تواصل معنا عبر واتساب</span>

                                    <div className="ml-2 w-12 h-12 bg-black/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 group-hover:-rotate-12 group-hover:scale-110 group-hover:bg-black/20 transition-all duration-500 shadow-inner">
                                        <FontAwesomeIcon icon={faWhatsapp} className="text-3xl text-white drop-shadow-md" />
                                    </div>
                                </div>
                            </a>
                        </MagneticButton>

                        {/* Trust indicators */}
                        <div className="mt-16 flex flex-wrap justify-center gap-8 text-center">
                            <div className="flex flex-col items-center gap-1">
                                <span className="text-[#D4AF37] font-black text-3xl">+١٥</span>
                                <span className="text-zinc-500 text-sm">سنة خبرة</span>
                            </div>
                            <div className="w-px h-12 bg-white/10 self-center" />
                            <div className="flex flex-col items-center gap-1">
                                <span className="text-[#D4AF37] font-black text-3xl">١٠٠٪</span>
                                <span className="text-zinc-500 text-sm">نتائج مضمونة</span>
                            </div>
                            <div className="w-px h-12 bg-white/10 self-center" />
                            <div className="flex flex-col items-center gap-1">
                                <span className="text-[#D4AF37] font-black text-3xl">آمن</span>
                                <span className="text-zinc-500 text-sm">معتمد طبياً</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* Sleek Footer */}
            <footer className="bg-black py-12 border-t border-white/5">
                <div className="container mx-auto px-6 text-center md:text-right flex flex-col md:flex-row justify-between items-center gap-6">
                    <div>
                        <h4 className="text-white font-black text-2xl mb-2">د. مها دحلان</h4>
                        <p className="text-zinc-500 text-sm">جدة، المملكة العربية السعودية</p>
                    </div>
                    <div className="flex gap-6 text-zinc-400 text-sm">
                        <a href="#" className="hover:text-[#D4AF37] transition-colors">الخدمات</a>
                        <a href="#" className="hover:text-[#D4AF37] transition-colors">تجارب العملاء</a>
                        <a href="#" className="hover:text-[#D4AF37] transition-colors">من نحن</a>
                        <a href="#" className="hover:text-[#D4AF37] transition-colors">الشروط والأحكام</a>
                    </div>
                    <div className="text-zinc-600 text-sm">
                        © 2026 عيادات د. مها دحلان. الشريك الإبداعي.
                    </div>
                </div>
            </footer>
        </main>
    );
}
