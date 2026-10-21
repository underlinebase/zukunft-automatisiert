import { splitCompounds } from '@/lib/text/compounds';

/** Setzt kurze Bindestrich-Wörter („KI-Berater“, „E-Mail“) ohne Umbruch. Für Überschriften. */
export default function KeepCompounds({ text }: { text: string }) {
  return (
    <>
      {splitCompounds(text).map((part, index) =>
        part.keep ? <span key={index} className="nowrap">{part.text}</span> : part.text,
      )}
    </>
  );
}
