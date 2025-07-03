export const Loader = () => (
    <div className="fixed bg-white left-0 right-0 top-0 bottom-0 flex items-center justify-center">
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200' className="w-50 h-auto">
            <circle fill='#005A2E' stroke='#005A2E' strokeWidth='21' r='15' cx='40' cy='100'>
                <animate attributeName='opacity' calcMode='spline' dur='2' values='1;0;1;' keySplines='.5 0 .5 1;.5 0 .5 1' repeatCount='indefinite' begin='-.4'></animate>
            </circle>
            <circle fill='#005A2E' stroke='#005A2E' strokeWidth='21' r='15' cx='100' cy='100'>
                <animate attributeName='opacity' calcMode='spline' dur='2' values='1;0;1;' keySplines='.5 0 .5 1;.5 0 .5 1' repeatCount='indefinite' begin='-.2'></animate>
            </circle>
            <circle fill='#005A2E' stroke='#005A2E' strokeWidth='21' r='15' cx='160' cy='100'>
                <animate attributeName='opacity' calcMode='spline' dur='2' values='1;0;1;' keySplines='.5 0 .5 1;.5 0 .5 1' repeatCount='indefinite' begin='0'></animate>
            </circle></svg>
    </div>
)