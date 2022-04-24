import PropTypes from 'prop-types';
import React from 'react';
import {StyleSheet, View} from 'react-native';

import Comment from './Comment';

function CommentsList(props) {
	const {comments, containerStyle, navigation, onDelete} = props;

	return (
		<View style={[commentsListStyles.container, containerStyle]}>
			{comments &&
				comments.map((page, index) =>
					page.items.map((comment) => (
						<Comment
							comment={comment}
							key={comment.id}
							last={index === comments.length - 1}
							navigation={navigation}
							onDelete={onDelete}
						/>
					))
				)}
		</View>
	);
}

const commentsListStyles = StyleSheet.create({
	container: {},
});

CommentsList.propTypes = {
	comments: PropTypes.array.isRequired,
	containerStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
	onDelete: PropTypes.func.isRequired,
	parentId: PropTypes.number.isRequired,
};

export default CommentsList;
