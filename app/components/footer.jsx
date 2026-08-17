export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-center py-6 px-4">
      <p className="text-sm text-slate-400">
        © {new Date().getFullYear()} Ivan Puga Macias. All rights reserved.
      </p>
    </footer>
  );
}
