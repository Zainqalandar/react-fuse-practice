import TitleWrapper from 'app/shared-components/TitleWrapper';
import WYSIWYGEditor from 'app/shared-components/WYSIWYGEditor';
import Chat from 'app/theme-layouts/shared-components/chatPanel/Chat';
import ChatPanel from 'app/theme-layouts/shared-components/chatPanel/ChatPanel';
import ContactList from 'app/theme-layouts/shared-components/chatPanel/ContactList';
import React, {useEffect, useState} from 'react'

const TaskLogs = () => {


    return (
        <>

            <TitleWrapper title=' There are not title ' className='border-1 border-red-800 w-[900px]' >
                <WYSIWYGEditor />
                </TitleWrapper>

        </>
    );
}

export default TaskLogs