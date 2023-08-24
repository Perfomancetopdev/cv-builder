import { CVEditor } from "../_components/CVEditor";
import { Tools } from "../_components/Tools";
import {
    Navigation,
    Footer,
} from '@emplohub/ui/server';

export default function Builder({ className }: { className: string }) {

    return (
        <div>
            <Navigation />

            <div className="container mx-auto my-8 lg:my-16 h-screen">
                <div className="mx-auto flex max-w-screen-xl flex-wrap p-6">
                    <div className="flex w-full flex-col gap-x-16 md:flex-row lg:gap-x-24">
                        <div className="md:max-w-72 lg:max-w-80 border-grey-lighten-4 mb-6 min-w-[14rem] flex-1 border-b-2 pb-6 md:order-2 md:mb-0 md:border-0 md:pb-0">
                            <Tools />
                        </div>

                        <div className="w-full md:w-2/3">
                            <CVEditor />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
