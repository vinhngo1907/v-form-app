import { type AppType } from "next/app";
import { type Session } from "next-auth";

import "~/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
    Component,
    pageProps: { session, ...pageProps },
}) => {
    return (
      <div>Hello Coders Tokyo</div>
    );
};

export default api.withTRPC(MyApp);