import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const Comments = () => {
  const comments = [
    {
      id: 1,
      name: "أحمد الراجحي",
      role: "مدير العمليات، شركة النماذج لتجارة العامة.",
      text: "انتقالنا إلى نظام مدار غير مفهومنا عن الكفاءة. تمكنا من تقليص تكاليف الشحن بنسبة 25% خلال الربع الأول.",
      img: "/assets/image/Manegar.png",
    },
    {
      id: 2,
      name: "سارة المهنا",
      role: "لرئيس التنفيذي للتوريد، جلوبال لوجستيك.",
      text: "نظام التتبع في مدار هو الأدق في السوق حالياً. الشفافية التي يوفرها لعملائنا رفعت من مستوى رضاهم بشكل ملحوظ.",
      img: "/assets/image/Manegar2.png",
    },
  ];
  return (
    <div id="reviews" className="bg-blue-50 py-10">
      <div className="w-[80%] m-auto grid max-[768px]:w-[90%] max-[1150px]:grid-cols-1 grid-cols-10 items-center gap-5">
        <div className="col-span-4">
          <h3 className="text-3xl font-black text-slate-800 pb-5">
            ماذا يقول شركاؤنا عن <br />
            <span className="text-orange-400 text-4xl">مدار؟</span>
          </h3>
          <p className="text-gray-500 pb-6">
            ثقة كبرى الشركات العالمية هي المحرك الأساسي لابتكاراتنا المستمرة في
            عالم اللوجستيات.
          </p>
          <div className="flex items-center gap-3">
            <div className="w-10.5 h-10.5 group hover:bg-orange-500 transition-colors duration-200 rounded-full cursor-pointer hover:border-none bg-transparent border border-slate-400 flex items-center justify-center">
              <ArrowRight
                size={24}
                className="text-slate-800 group-hover:text-white transition-colors duration-200"
              />
            </div>
            <div className="w-10.5 h-10.5 group hover:bg-orange-500 transition-colors duration-200 rounded-full cursor-pointer hover:border-none bg-transparent border border-slate-400 flex items-center justify-center">
              <ArrowLeft
                size={24}
                className="text-slate-800 group-hover:text-white transition-colors duration-200"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 max-[768px]:grid-cols-1 gap-6 col-span-6">
          {comments.map((comment) => (
            <div key={comment.id} className="bg-white rounded-3xl">
              <div className="mx-8 pb-7.25 pt-10">
                <div>
                  <Quote className="text-orange-400" size={28} />
                </div>
                <div className="py-5">
                  <p className="text-slate-700 font-semibold text-lg">
                    {comment.text}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src={comment.img}
                    className="object-cover w-12 rounded-full"
                    alt=""
                  />
                  <div>
                    <span className="font-semibold text-slate-800">
                      {comment.name}
                    </span>
                    <p className="text-[12px] text-slate-600">{comment.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Comments;
