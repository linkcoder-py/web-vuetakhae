package com.web.server.service;

import com.web.server.dto.*;

import java.sql.SQLException;
import java.util.List;

public interface BoardService {
    List<BoardSimpleDto> searchAll(String email) throws SQLException;

    Board searchByBoardId(int boardId) throws SQLException;

    boolean write(String email, Board board) throws SQLException;

    int deleteBoard(int boardId) throws SQLException;

    void writeComment(CommentDto comment) throws SQLException;

    void updateComment(CommentDto comment) throws SQLException;

    int deleteComment(Integer commentId) throws SQLException;

    List<CommentDto> selectCommentByBoardId(int boardId);

    List<BoardSimpleDto> searchAllByFood(BoardSearchByFoodList foodList) throws SQLException;

    void updateViewCnt(Integer boardId) throws SQLException;

    int postFavorite(String email, FavoriteRequestBody boardId) throws SQLException;
}
