import { lessons, units } from "@/db/schema"
import { UnitBanner } from "./unit-banner";
import { LessonButton } from "./lesson-button";

type Props = {
    id: number,
    title: string,
    order: number,
    description: string,
    lessons: (typeof lessons.$inferSelect & {
        completed: boolean
    })[],
    activeLesson: typeof lessons.$inferSelect & {
        unit: typeof units.$inferSelect;
    } | undefined,
    activeLessonPercentage: number
}
export default function Unit({
    id, title, order, description, lessons, activeLesson, activeLessonPercentage
}: Props
) {
    return (
        <>
            <UnitBanner title={title} description={description} />
            <div className="flex items-center relative flex-col">
                {lessons.map((lesson, index) => {
                    const isCurrent = lesson.id === activeLesson?.id;
                    const isLocked = !lesson.completed && !isCurrent;

                    return (
                        <LessonButton
                            key={lesson.id}
                            id={lesson.id}
                            index={index}
                            totalCount={lessons.length - 1}
                            current={isCurrent}
                            locked={isLocked}
                            percentage={activeLessonPercentage}
                        />)
                })}
            </div>
        </>
    )
}
