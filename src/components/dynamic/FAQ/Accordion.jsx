import QnaSlice from './QnaSlice';

const Faq = () => {




    return (
        <div className='flex text-start flex-col gap-8 mt-8 items-center w-full text-[14px] font-montserrat'>
            <QnaSlice
                question={'Can I work on a project I started before the hackathon?'}
                answer={'No, you should start your project along with other participants when the hackathon starts'} />
            <QnaSlice
                question={'What happens if I need help during the hackathon?'}
                answer={'If you or your teammates need help, reach out to the organizers or experts in our community who will be happy to help'} />
            <QnaSlice
                question={'What happens if I dont have an idea for a project'}
                answer={'take a look at the hackathon theme and go through some online resources, we are sure you can come up with something'} />
            <QnaSlice
                question={'Can I join a team or do I have to come with one?'}
                answer={'Come with a team'} />
            <QnaSlice
                question={'What happens after the hackathon ends?'}
                answer={'Submissions are closed, judging takes place, winners announced and prizes distributed.'} />

            <QnaSlice
                question={'Can I work on a project I started before the hackathon?'}
                answer={'No, you should start your project along with other participants when the hackathon starts'} />
        </div>
    );
};

export default Faq;
