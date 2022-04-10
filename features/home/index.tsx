import { Status } from "@/bff/types/status";
import { TestingFeature } from "./TestingFeature";

interface Props {
  status: Status;
}

export const Home: React.FC<Props> = ({ status }) => {
  console.debug(status);

  return (
    <div className="my-5">
      <TestingFeature />
    </div>
  );
};
