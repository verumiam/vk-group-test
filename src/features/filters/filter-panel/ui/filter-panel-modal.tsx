import { Icon24Dismiss } from '@vkontakte/icons';
import {
  Button,
  Checkbox,
  FormItem,
  FormLayoutGroup,
  ModalPage,
  ModalPageHeader,
  ModalRoot,
  PanelHeaderButton,
  PanelHeaderClose,
} from '@vkontakte/vkui';
import { FC, memo } from 'react';

import { COLOR_SET, MODAL_NAME } from '../config/filter-panel.config';
import { useFilterPanel } from '../lib/filter-panel.hook';

const FilterPanelModal: FC = memo(() => {
  const { isModalOpen, setChecked, toggleModal, handleChangeColor, handleApplyFilters, platform } =
    useFilterPanel();

  return (
    <ModalRoot activeModal={isModalOpen ? MODAL_NAME : null} onClose={toggleModal}>
      <ModalPage
        id={MODAL_NAME}
        header={
          <ModalPageHeader
            before={platform !== 'ios' && <PanelHeaderClose onClick={toggleModal} />}
            after={
              platform === 'ios' && (
                <PanelHeaderButton onClick={toggleModal}>
                  <Icon24Dismiss />
                </PanelHeaderButton>
              )
            }
          >
            Фильтры
          </ModalPageHeader>
        }
      >
        <FormLayoutGroup>
          <FormItem top="Выберите цвет аватарки сообщества">
            {COLOR_SET.map(({ value, label }) => {
              return (
                <Checkbox
                  key={value}
                  value={value}
                  checked={setChecked(value)}
                  onChange={(event) => handleChangeColor(value, event.currentTarget.checked)}
                >
                  {label}
                </Checkbox>
              );
            })}
          </FormItem>
          <FormItem>
            <Button size="m" stretched onClick={handleApplyFilters}>
              Показать результаты
            </Button>
          </FormItem>
        </FormLayoutGroup>
      </ModalPage>
    </ModalRoot>
  );
});

export default FilterPanelModal;
