import RemoteControl from "../components/RemoteControl";
import { useDetectStorage } from "../features/ac";

export default function Rc() {
  useDetectStorage();
  return (
    <div>
      <RemoteControl />
    </div>
  );
}
