import React, { useRef, useState, useEffect } from 'react';
import { Download, RotateCcw, Sparkles, Brush, Eraser, Check, Info } from 'lucide-react';
import { folkAudio } from '../utils/audio';

export const AipanCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [brushSize, setBrushSize] = useState<number>(4);
  const [isEraser, setIsEraser] = useState(false);
  const [selectedStamp, setSelectedStamp] = useState<string | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  // Initialize canvas with Geru red background
  const initCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Geru (Terracotta Red) background
    ctx.fillStyle = '#8B1E1E';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Subtle Aipan border lines
    ctx.strokeStyle = 'rgba(255, 251, 235, 0.4)';
    ctx.lineWidth = 2;
    ctx.strokeRect(12, 12, canvas.width - 24, canvas.height - 24);
    ctx.strokeRect(18, 18, canvas.width - 36, canvas.height - 36);

    // Corner decorative quarter circles
    const r = 24;
    ctx.beginPath();
    ctx.arc(18, 18, r, 0, Math.PI / 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(canvas.width - 18, 18, r, Math.PI / 2, Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(18, canvas.height - 18, r, -Math.PI / 2, 0);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(canvas.width - 18, canvas.height - 18, r, Math.PI, -Math.PI / 2);
    ctx.stroke();
  };

  useEffect(() => {
    initCanvas();
  }, []);

  // Freehand drawing handlers
  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const x = (clientX - rect.left) * (canvas.width / rect.width);
    const y = (clientY - rect.top) * (canvas.height / rect.height);

    // If stamp is active, stamp the motif and exit
    if (selectedStamp) {
      drawMotif(ctx, selectedStamp, x, y);
      folkAudio.playTempleBell();
      return;
    }

    setIsDrawing(true);
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing || selectedStamp) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const x = (clientX - rect.left) * (canvas.width / rect.width);
    const y = (clientY - rect.top) * (canvas.height / rect.height);

    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    if (isEraser) {
      ctx.strokeStyle = '#8B1E1E'; // Geru clay color to erase
      ctx.lineWidth = brushSize * 4;
    } else {
      ctx.strokeStyle = '#FFFBEB'; // Biswar rice flour paste
      ctx.lineWidth = brushSize;
    }

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  // Stamp motif drawer
  const drawMotif = (ctx: CanvasRenderingContext2D, motif: string, cx: number, cy: number) => {
    ctx.save();
    ctx.strokeStyle = '#FFFBEB';
    ctx.fillStyle = '#FFFBEB';
    ctx.lineWidth = 2.5;

    if (motif === 'lotus') {
      // 8-petaled sacred lotus
      const numPetals = 8;
      const radius = 32;
      for (let i = 0; i < numPetals; i++) {
        const angle = (i * 2 * Math.PI) / numPetals;
        const px = cx + Math.cos(angle) * radius;
        const py = cy + Math.sin(angle) * radius;
        ctx.beginPath();
        ctx.arc(px, py, 14, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.beginPath();
      ctx.arc(cx, cy, 12, 0, Math.PI * 2);
      ctx.fill();
    } else if (motif === 'diya') {
      // Traditional Diya
      ctx.beginPath();
      ctx.arc(cx, cy + 8, 22, 0, Math.PI, false);
      ctx.closePath();
      ctx.fill();

      // Diya Flame
      ctx.beginPath();
      ctx.moveTo(cx - 6, cy + 6);
      ctx.quadraticCurveTo(cx - 10, cy - 14, cx, cy - 24);
      ctx.quadraticCurveTo(cx + 10, cy - 14, cx + 6, cy + 6);
      ctx.closePath();
      ctx.stroke();
    } else if (motif === 'charan') {
      // Lakshmi Charan (Sacred footprint pair)
      const drawFoot = (ox: number, oy: number) => {
        ctx.beginPath();
        ctx.ellipse(ox, oy, 9, 14, 0, 0, Math.PI * 2);
        ctx.fill();
        for (let t = -2; t <= 2; t++) {
          ctx.beginPath();
          ctx.arc(ox + t * 4, oy - 18, 2.5, 0, Math.PI * 2);
          ctx.fill();
        }
      };
      drawFoot(cx - 14, cy);
      drawFoot(cx + 14, cy);
    } else if (motif === 'swastika') {
      // Shubh Swastika
      const s = 24;
      ctx.lineWidth = 4;
      ctx.beginPath();
      // Main cross
      ctx.moveTo(cx - s, cy); ctx.lineTo(cx + s, cy);
      ctx.moveTo(cx, cy - s); ctx.lineTo(cx, cy + s);
      // Arms
      ctx.moveTo(cx + s, cy); ctx.lineTo(cx + s, cy + s * 0.7);
      ctx.moveTo(cx - s, cy); ctx.lineTo(cx - s, cy - s * 0.7);
      ctx.moveTo(cx, cy - s); ctx.lineTo(cx + s * 0.7, cy - s);
      ctx.moveTo(cx, cy + s); ctx.lineTo(cx - s * 0.7, cy + s);
      ctx.stroke();

      // 4 dots
      const d = 11;
      [
        [-d, -d], [d, -d], [-d, d], [d, d]
      ].forEach(([dx, dy]) => {
        ctx.beginPath();
        ctx.arc(cx + dx, cy + dy, 3, 0, Math.PI * 2);
        ctx.fill();
      });
    } else if (motif === 'bell') {
      // Temple Ghanti
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(cx - 18, cy + 14);
      ctx.quadraticCurveTo(cx - 14, cy - 14, cx, cy - 18);
      ctx.quadraticCurveTo(cx + 14, cy - 14, cx + 18, cy + 14);
      ctx.closePath();
      ctx.stroke();

      // Clapper
      ctx.beginPath();
      ctx.arc(cx, cy + 16, 5, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  };

  // Generate an authentic procedural Chowki Aipan Mandala!
  const generateTraditionalChowki = () => {
    initCanvas();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    folkAudio.playTempleBell();
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    ctx.save();
    ctx.strokeStyle = '#FFFBEB';
    ctx.fillStyle = '#FFFBEB';

    // 1. Concentric circles
    [20, 45, 75, 110, 150].forEach((radius, idx) => {
      ctx.lineWidth = idx % 2 === 0 ? 3 : 1.5;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.stroke();
    });

    // 2. Central 12-petaled Lotus
    const petals = 12;
    for (let i = 0; i < petals; i++) {
      const angle = (i * 2 * Math.PI) / petals;
      const x1 = cx + Math.cos(angle) * 75;
      const y1 = cy + Math.sin(angle) * 75;
      const x2 = cx + Math.cos(angle + Math.PI / petals) * 110;
      const y2 = cy + Math.sin(angle + Math.PI / petals) * 110;
      const x3 = cx + Math.cos(angle) * 110;
      const y3 = cy + Math.sin(angle) * 110;

      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(angle) * 45, cy + Math.sin(angle) * 45);
      ctx.quadraticCurveTo(x1, y1, x2, y2);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(x3, y3, 4, 0, Math.PI * 2);
      ctx.fill();
    }

    // 3. Lakshmi Charan in center
    drawMotif(ctx, 'charan', cx, cy);

    // 4. Outer scalloped border with dots
    const outerRadius = 150;
    const scallops = 24;
    for (let i = 0; i < scallops; i++) {
      const angle = (i * 2 * Math.PI) / scallops;
      const px = cx + Math.cos(angle) * outerRadius;
      const py = cy + Math.sin(angle) * outerRadius;

      ctx.beginPath();
      ctx.arc(px, py, 10, 0, Math.PI * 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(px, py, 3, 0, Math.PI * 2);
      ctx.fill();
    }

    // 4 Corner Diyas
    drawMotif(ctx, 'diya', 60, 60);
    drawMotif(ctx, 'diya', canvas.width - 60, 60);
    drawMotif(ctx, 'diya', 60, canvas.height - 60);
    drawMotif(ctx, 'diya', canvas.width - 60, canvas.height - 60);

    ctx.restore();
  };

  // Download artwork
  const downloadArt = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = `Aipan-Art-Uttarakhand-Diwas-IITR-${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
    setDownloadSuccess(true);
    folkAudio.playTempleBell();
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <section id="aipan" className="py-20 relative bg-[#FFFDF9] border-t border-amber-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 border border-red-300 text-red-800 text-xs font-bold mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-red-600" />
            <span>Interactive Sacred Art Studio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-900 mb-3">
            <span className="font-pahadi-display text-red-700">ऐपण कला स्टूडियो</span>
            <span className="block font-serif-royal text-xl sm:text-3xl text-stone-800 mt-1 font-bold">
              Virtual Aipan Art Canvas
            </span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-normal">
            Create authentic Kumaoni ritual geometric art with Geru (ochre clay) and Biswar (rice flour paste). Draw freehand, stamp sacred motifs, or generate a traditional Chowki!
          </p>
        </div>

        {/* Studio Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
          {/* Controls Panel in Light Style */}
          <div className="lg:col-span-1 space-y-4 bg-white p-6 rounded-3xl border border-amber-300 shadow-xl">
            <div>
              <label className="text-xs uppercase font-extrabold text-amber-900 block mb-2 tracking-wider">
                Drawing Tools
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    setIsEraser(false);
                    setSelectedStamp(null);
                  }}
                  className={`p-3 rounded-2xl border flex items-center justify-center gap-2 text-xs font-bold transition-all ${
                    !isEraser && selectedStamp === null
                      ? 'bg-amber-600 text-white border-amber-600 shadow-md'
                      : 'bg-amber-50 text-stone-700 border-amber-200 hover:bg-amber-100'
                  }`}
                >
                  <Brush className="w-4 h-4" />
                  <span>Rice Paste</span>
                </button>
                <button
                  onClick={() => {
                    setIsEraser(true);
                    setSelectedStamp(null);
                  }}
                  className={`p-3 rounded-2xl border flex items-center justify-center gap-2 text-xs font-bold transition-all ${
                    isEraser
                      ? 'bg-red-700 text-white border-red-700 shadow-md'
                      : 'bg-amber-50 text-stone-700 border-amber-200 hover:bg-amber-100'
                  }`}
                >
                  <Eraser className="w-4 h-4" />
                  <span>Geru Eraser</span>
                </button>
              </div>
            </div>

            {/* Brush Size */}
            <div>
              <label className="text-xs uppercase font-extrabold text-amber-900 block mb-1.5 tracking-wider">
                Stroke Thickness ({brushSize}px)
              </label>
              <div className="flex gap-2">
                {[2, 4, 8, 14].map((size) => (
                  <button
                    key={size}
                    onClick={() => setBrushSize(size)}
                    className={`flex-1 py-1.5 rounded-xl border text-xs font-bold transition-all ${
                      brushSize === size
                        ? 'bg-amber-600 text-white border-amber-600 shadow-sm'
                        : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    {size === 2 ? 'Fine' : size === 4 ? 'Med' : size === 8 ? 'Thick' : 'Bold'}
                  </button>
                ))}
              </div>
            </div>

            {/* Sacred Motif Stamps */}
            <div>
              <label className="text-xs uppercase font-extrabold text-amber-900 block mb-2 tracking-wider">
                Sacred Motif Stamps
              </label>
              <p className="text-[11px] text-stone-500 mb-2">Select a motif then tap anywhere on canvas:</p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'lotus', name: 'Kamal (Lotus)', icon: '🪷' },
                  { id: 'diya', name: 'Diya (Deepak)', icon: '🪔' },
                  { id: 'charan', name: 'Lakshmi Charan', icon: '👣' },
                  { id: 'swastika', name: 'Shubh Swastika', icon: '卐' },
                  { id: 'bell', name: 'Temple Bell', icon: '🔔' },
                ].map((motif) => (
                  <button
                    key={motif.id}
                    onClick={() => {
                      setSelectedStamp(selectedStamp === motif.id ? null : motif.id);
                      setIsEraser(false);
                    }}
                    className={`p-2.5 rounded-xl border text-xs font-bold text-left flex items-center gap-2 transition-all ${
                      selectedStamp === motif.id
                        ? 'bg-amber-100 text-amber-900 border-amber-500 ring-2 ring-amber-400'
                        : 'bg-white text-stone-700 border-stone-200 hover:bg-amber-50'
                    }`}
                  >
                    <span className="text-base">{motif.icon}</span>
                    <span className="text-[11px] truncate">{motif.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 border-t border-stone-200 space-y-2">
              <button
                onClick={generateTraditionalChowki}
                className="w-full py-3 px-3 rounded-2xl bg-gradient-to-r from-red-700 via-amber-600 to-red-700 hover:from-red-600 hover:to-amber-500 text-white font-bold text-xs shadow-md flex items-center justify-center gap-2 transition-all"
              >
                <Sparkles className="w-4 h-4 text-amber-200" />
                <span>Generate Traditional Chowki</span>
              </button>

              <div className="flex gap-2">
                <button
                  onClick={initCanvas}
                  className="flex-1 py-2 px-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-200 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Clear</span>
                </button>

                <button
                  onClick={downloadArt}
                  className="flex-1 py-2 px-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md transition-colors"
                >
                  {downloadSuccess ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-white" />
                      <span>Saved!</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-3.5 h-3.5" />
                      <span>Download</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Canvas Board Area in Light Frame */}
          <div className="lg:col-span-3 flex flex-col items-center">
            <div className="w-full relative rounded-3xl p-3 sm:p-4 bg-white border-2 border-amber-300 shadow-2xl overflow-hidden flex flex-col items-center">
              <canvas
                ref={canvasRef}
                width={700}
                height={500}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
                onTouchStart={startDrawing}
                onTouchMove={draw}
                onTouchEnd={stopDrawing}
                className="w-full max-w-[700px] h-[340px] sm:h-[480px] rounded-2xl cursor-crosshair shadow-lg touch-none bg-[#8B1E1E]"
              />

              {/* Status bar */}
              <div className="w-full mt-3 px-2 flex flex-wrap items-center justify-between text-xs text-stone-600 gap-2 font-medium">
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-700 border border-stone-300"></span>
                  <span className="font-bold text-stone-800">Base: Geru Clay</span>
                  <span className="w-3 h-3 rounded-full bg-amber-50 border border-stone-300 ml-2"></span>
                  <span className="font-bold text-stone-800">Ink: Biswar (Rice Paste)</span>
                </span>
                <span className="italic text-stone-500">
                  {selectedStamp ? `Stamping "${selectedStamp.toUpperCase()}" motif` : 'Freehand drawing mode active'}
                </span>
              </div>
            </div>

            {/* Aipan Culture Card in Light Design */}
            <div className="mt-6 w-full p-5 rounded-3xl bg-amber-50 border border-amber-200 text-xs text-stone-700 flex items-start gap-3 shadow-sm">
              <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <strong className="text-amber-900 block mb-0.5 font-bold text-sm">
                  Did You Know? Geographical Indication (GI) Tagged Art
                </strong>
                Traditional Aipan was historically painted by mothers on threshold stones (Dehleej) during Deepawali, Janmashtami, and weddings to welcome Lakshmi and positive cosmic frequencies. At IIT Roorkee’s Uttarakhand Diwas, master women artisans lead live hands-on workshops for students.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
