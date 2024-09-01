import { useState, useEffect } from "preact/hooks";
import { signal, useSignal } from "@preact/signals";

const MINUTE = 1000 * 60;

const searchParams = new URLSearchParams(window.location.search);
const reps = 10 || searchParams.get("reps");
const sets = 2 || searchParams.get("sets");

const overallSets = Array.from({
  length: sets,
}).fill(reps);
const activeSet = signal(0);
const subsets = Array.from({
  length: sets,
})
  .fill(0)
  .map((d) => signal([]));

export const Timer = ({ milliseconds = 0, stepper = 1000 }) => {
  const [remaining, setRemaining] = useState(milliseconds);

  useEffect(() => {
    let id = setInterval(() => {
      if (milliseconds <= 0) {
        clearInterval(id);
      }
      setRemaining((d) => d - stepper);
    }, stepper);

    return () => {
      clearInterval(id);
    };
  }, []);

  return <p>{remaining}</p>;
};

export const WorkoutTimer = () => {
  return (
    <div class="flex flex-col gap-10">
      <ul class="flex flex-col gap-2">
        {overallSets.map((repCount, i) => {
          const isCurrentSet = activeSet.value === i;
          return (
            <li>
              <SetRunView
                set={i}
                count={repCount}
                isActive={isCurrentSet}
                addSubset={(required, remainingCount) => {
                  activeSet.value = i;
                  const clone = subsets[i].value.slice();
                  clone[0] = remainingCount;
                  subsets[i].value = clone;
                }}
                onComplete={() => {
                  activeSet.value += 1;
                }}
              />
              <ul class="flex gap-2 flex-col my-1">
                {!subsets[i].value.length
                  ? null
                  : subsets[i].value.map((subsetCount, subSet) => (
                      <li class="ml-2">
                        <SetRunView
                          prefix="Subset"
                          set={i}
                          count={subsetCount}
                          isActive={isCurrentSet}
                          addSubset={(required, remainingCount) => {
                            if (remainingCount <= 0) {
                              activeSet.value += 1;
                            }
                            subsets[i].value =
                              subsets[i].value.concat(remainingCount);
                          }}
                          onComplete={() => {
                            activeSet.value += 1;
                          }}
                        />
                      </li>
                    ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const SetRunView = ({
  prefix = "Set",
  set,
  count: requiredCount,
  isActive,
  onComplete,
  addSubset,
}) => {
  const count = useSignal("");
  return (
    <div
      class={`flex justify-between border p-4 border-zinc-600 rounded-md ${
        isActive ? "border-zinc-100" : ""
      }`}
    >
      <p>
        {prefix} {set + 1}: {requiredCount}
      </p>
      <input
        placeholder="Completed reps"
        class={`shadow-sm p-1 bg-transparent rounded-md px-2 shadow-white border border-zinc-600 ${
          isActive ? "border-zinc-100" : ""
        }`}
        value={count}
        onChange={(e) => {
          const asNumber = Number(e.target.value);
          count.value = asNumber;
          if (e.target.value < requiredCount) {
            addSubset(requiredCount, requiredCount - asNumber);
          }
          if (e.target.value >= requiredCount) {
            onComplete();
          }
        }}
      />
    </div>
  );
};
